import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { generateId } from "../../lib/generateId";
import { VideoResponse } from "../../types/frontendModels";

export const config = {
  api: {
    bodyParser: false,
  },
};

const VIDEO_NAME_LENGTH = 32;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VideoResponse>
) {
  if (req.method === "POST") {
    const form = formidable({
      keepExtensions: true,
      maxFiles: 1,
      filename: (_, extension) => {
        return `${generateId(VIDEO_NAME_LENGTH)}${extension}`;
      },
      uploadDir: "public/videos",
    });

    form.parse(req, (err, _, files) => {
      if (err) {
        res.status(400).end();
        return;
      }

      const file = Array.isArray(files.file) ? files.file[0] : files.file;

      res.status(200).json({
        videoName: file.newFilename,
      });
    });

    return;
  }

  res.status(400).end();
}
