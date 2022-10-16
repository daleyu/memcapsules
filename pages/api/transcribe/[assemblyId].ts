import { NextApiRequest, NextApiResponse } from "next";
import {
  ASSEMBLY_AI_API_KEY,
  ASSEMBLY_AI_TRANSCRIPT_URL,
} from "../../../lib/assemblyAi";
import { TranscribePollResponse } from "../../../types/frontendModels";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TranscribePollResponse>
) {
  if (req.method === "GET") {
    const assemblyId = req.query.assemblyId as string;

    const transcriptRes = await fetch(
      `${ASSEMBLY_AI_TRANSCRIPT_URL}/${assemblyId}`,
      {
        method: "GET",
        headers: {
          authorization: ASSEMBLY_AI_API_KEY,
        },
      }
    );

    const { status, text } = await transcriptRes.json();

    console.log("AssemblyAI status", status);

    res.status(200).json({
      transcription: status === "completed" ? text : null,
    });

    return;
  }

  res.status(400).end();
}
