// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { generateId } from "../../lib/generateId";
import { prisma } from "../../server/prisma";
import { ComposerFrontendModel } from "../../types/frontendModels";
import { ComposerRequestBody } from "../../types/requestBodies";

const COMPOSER_ID_LENGTH = 8;
const RECIPIENT_ID_LENGTH = 16;
const OCCASION_ID_LENGTH = 32;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComposerFrontendModel>
) {
  const body = req.body as ComposerRequestBody;

  const id = generateId(COMPOSER_ID_LENGTH);

  const composer = await prisma.composer.create({
    data: {
      id,
      name: body.name,
      proxyName: body.proxyName,
      recipients: {
        create: body.recipients.map((recipient) => ({
          id: generateId(RECIPIENT_ID_LENGTH),
          name: recipient.name,
          occasions: {
            create: recipient.occasions.map((occasion) => ({
              id: generateId(OCCASION_ID_LENGTH),
              label: occasion.label,
              date: occasion.date,
            })),
          },
        })),
      },
    },
    include: {
      recipients: {
        include: {
          occasions: true,
        },
      },
    },
  });

  res.status(200).json({
    id: composer.id,
    name: composer.name,
    proxyName: composer.proxyName,
    recipients: composer.recipients.map((recipient) => ({
      id: recipient.id,
      name: recipient.name,
      composerName: composer.name,
      occasionIds: recipient.occasions.map((occasion) => occasion.id),
    })),
  });
}