import { GetServerSideProps, NextPage } from "next";
import { RecipientOccasionEntry } from "../../components/recipientOccasionEntry";
import { SplitLayout } from "../../layouts/splitLayout";
import { prisma } from "../../server/prisma";
import { RecipientFrontendModel } from "../../types/frontendModels";

interface Props {
  recipient: RecipientFrontendModel;
}

const Compose: NextPage<Props> = ({ recipient }) => {
  const main = (
    <div>
      <h1>Hello, {recipient.name}</h1>
      {recipient.occasions.map((occasion) => (
        <RecipientOccasionEntry key={occasion.id} occasion={occasion} />
      ))}
    </div>
  );

  return <SplitLayout sidebar={<p>sidebar</p>} main={main} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const recipientId = context.query.recipientId as string;

  const dbRecipient = await prisma.recipient.findUnique({
    where: { id: recipientId },
    include: {
      composer: true,
      occasions: true,
    },
  });

  if (!dbRecipient) {
    return {
      notFound: true,
    };
  }

  const now = new Date().getTime();

  const occasions = dbRecipient.occasions
    .filter((occasion) => occasion.date.getTime() > now)
    .map((occasion) => ({
      id: occasion.id,
      label: occasion.label,
      date: occasion.date.toISOString(),
      message: occasion.message,
    }));

  const recipient: RecipientFrontendModel = {
    id: dbRecipient.id,
    name: dbRecipient.name,
    email: dbRecipient.email,
    phone: dbRecipient.phone,
    composerName: dbRecipient.composer.name,
    occasions,
  };

  return {
    props: { recipient },
  };
};

export default Compose;
