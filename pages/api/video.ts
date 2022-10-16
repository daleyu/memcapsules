import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { Writable } from "stream";
import { videosContainerClient } from "../../lib/azureStorage";
import { generateId } from "../../lib/generateId";
import { VideoResponse } from "../../types/frontendModels";

export const config = {
  api: {
    bodyParser: false,
  },
};

const VIDEO_NAME_LENGTH = 32;

const fileConsumer = <T = unknown>(acc: T[]) => {
  const writable = new Writable({
    write: (chunk, _enc, next) => {
      acc.push(chunk);
      next();
    },
  });

  return writable;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VideoResponse>
) {
  if (req.method === "POST") {
    const chunks: never[] = [];

    const form = formidable({
      keepExtensions: true,
      maxFiles: 1,
      filename: (_, extension) => {
        return `${generateId(VIDEO_NAME_LENGTH)}${extension}`;
      },
      uploadDir: "public/videos",
      fileWriteStreamHandler: () => fileConsumer(chunks),
    });

    form.parse(req, (err, _, files) => {
      if (err) {
        res.status(400).end();
        return;
      }

      const file = Array.isArray(files.file) ? files.file[0] : files.file;

      const fileData = Buffer.concat(chunks);
      const videoName = file.newFilename;

      videosContainerClient
        .getBlockBlobClient(videoName)
        .uploadData(fileData)
        .then(() => {
          res.status(200).json({ videoName });
        })
        .catch(() => {
          res.status(400).end();
        });
    });

    return;
  }

  res.status(400).end();
}
