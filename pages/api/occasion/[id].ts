// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/prisma";
import { OccasionFrontendModel } from "../../../types/frontendModels";
import { OccasionRequestBody } from "../../../types/requestBodies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OccasionFrontendModel>
) {
  const id = req.query.id as string;

  const body = req.body as OccasionRequestBody;

  if (req.method === "GET") {
    const occasion = await prisma.occasion.findUnique({
      where: { id },
    });

    if (!occasion) {
      res.status(400).end();
      return;
    }

    res.status(200).json({
      id: occasion.id,
      label: occasion.label,
      date: occasion.date.toISOString(),
    });
  } else if (req.method === "PATCH") {
    const occasion = await prisma.occasion.update({
      where: { id },
      data: {
        message: body.message,
      },
    });

    res.status(200).json({
      id: occasion.id,
      label: occasion.label,
      date: occasion.date.toISOString(),
    });
  }
}
