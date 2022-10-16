import { NextApiRequest, NextApiResponse } from "next";
import {
  ASSEMBLY_AI_API_KEY,
  ASSEMBLY_AI_TRANSCRIPT_URL,
} from "../../../lib/assemblyAi";
import { VIDEOS_CONTAINER_URL } from "../../../lib/azureStorage";
import { TranscribeResponse } from "../../../types/frontendModels";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TranscribeResponse>
) {
  if (req.method === "GET") {
    const videoName = req.query.videoName as string;

    const transcriptRes = await fetch(ASSEMBLY_AI_TRANSCRIPT_URL, {
      method: "POST",
      headers: {
        authorization: ASSEMBLY_AI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        audio_url: `${VIDEOS_CONTAINER_URL}/${videoName}`,
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
