// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/prisma";
import { RecipientFrontendModel } from "../../../types/frontendModels";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecipientFrontendModel>
) {
  const id = req.query.id as string;

  const recipient = await prisma.recipient.findUnique({
    where: { id },
    include: {
      composer: true,
      occasions: true,
    },
  });

  if (!recipient) {
    res.status(400).end();
    return;
  }

  res.status(200).json({
    id: recipient.id,
    name: recipient.name,
    composerName: recipient.composer.name,
    occasionIds: recipient.occasions.map((occasion) => occasion.id),
  });
}
