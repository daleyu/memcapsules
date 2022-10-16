import { NextApiRequest, NextApiResponse } from "next";
import absoluteUrl from "next-absolute-url";
import {
  ASSEMBLY_AI_API_KEY,
  ASSEMBLY_AI_TRANSCRIPT_URL,
  ASSEMBLY_AI_UPLOAD_URL,
} from "../../../lib/assemblyAi";
import { TranscribeResponse } from "../../../types/frontendModels";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TranscribeResponse>
) {
  if (req.method === "GET") {
    const videoName = req.query.videoName as string;

    const { origin } = absoluteUrl(req);

    const videoRes = await fetch(`${origin}/videos/${videoName}`, {
      method: "GET",
    });

    const uploadRes = await fetch(ASSEMBLY_AI_UPLOAD_URL, {
      method: "POST",
      headers: {
        authorization: ASSEMBLY_AI_API_KEY,
        "Transfer-Encoding": "chunked",
      },
      body: videoRes.body,
    });

    const { upload_url } = await uploadRes.json();

    const transcriptRes = await fetch(ASSEMBLY_AI_TRANSCRIPT_URL, {
      method: "POST",
      headers: {
        authorization: ASSEMBLY_AI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        audio_url: upload_url,
      }),
    });

    const { id: assemblyId } = await transcriptRes.json();

    res.status(200).json({
      assemblyId,
    });

    return;
  }

  res.status(400).end();
}
