import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { ComposerFormControls } from "../../../components/composerFormControls";
import { ComposerRecipientEntry } from "../../../components/composerRecipientEntry";
import SidebarEntry from "../../../components/sidebarEntry";
import { SplitLayout } from "../../../layouts/splitLayout";
import { prisma } from "../../../server/prisma";
import { ComposerFormStore } from "../../../store/composerFormStore";
import { Colors } from "../../../styles/tokens";
import { ComposerFrontendModel } from "../../../types/frontendModels";

interface Props {
  composer: ComposerFrontendModel;
  page: number;
}

const Compose: NextPage<Props> = ({ composer, page }) => {
  const router = useRouter();

  const [composerFormStore] = useState(() => new ComposerFormStore(composer));

  const recipient = composer.recipients[page - 1];

  // TODO: hacky way to show recipient's view link
  const recipientViewRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (recipientViewRef.current) {
      recipientViewRef.current.innerText = `${window.location.origin}/view/${recipient.id}`;
    }
  });

  const main = (
    <div>
      <ComposerRecipientEntry
        recipient={recipient}
        composerFormStore={composerFormStore}
      />
      <ComposerFormControls
        composer={composer}
        page={page}
        composerFormStore={composerFormStore}
      />

      <p
        ref={recipientViewRef}
        style={{ color: Colors.DARK_TEXT, opacity: 0.2 }}
      />
    </div>
  );

  const sidebar = (
    <div>
      {composer.recipients.map((recipient, index) => (
        <SidebarEntry
          key={recipient.id}
          active={page === index + 1}
          title={recipient.name}
          description={`Occasions to write: ${recipient.occasions
            .map((occasion) => occasion.label)
            .join(", ")}.`}
          onClick={() => {
            router.push(`/compose/${composer.id}/${index + 1}`);
          }}
        />
      ))}
    </div>
  );

  return <SplitLayout sidebar={sidebar} main={main} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const composerId = context.query.composerId as string;
  const pageStr = context.query.page as string;

  const dbComposer = await prisma.composer.findUnique({
    where: { id: composerId },
    include: {
      recipients: {
        include: {
          occasions: true,
        },
      },
    },
  });

  if (!dbComposer) {
    return {
      notFound: true,
    };
  }

  const page = Number(pageStr);

  if (isNaN(page) || page < 1 || page > dbComposer.recipients.length) {
    return {
      redirect: {
        destination: `/compose/${composerId}/1`,
        permanent: false,
      },
    };
  }

  const composer: ComposerFrontendModel = {
    id: dbComposer.id,
    name: dbComposer.name,
    proxyName: dbComposer.proxyName,
    recipients: dbComposer.recipients.map((recipient) => ({
      id: recipient.id,
      name: recipient.name,
      email: recipient.email,
      phone: recipient.phone,
      composerName: dbComposer.name,
      occasions: recipient.occasions.map((occasion) => ({
        id: occasion.id,
        label: occasion.label,
        date: occasion.date.toISOString(),
        message: occasion.message,
        videoName: occasion.videoName,
      })),
    })),
  };

  return {
    props: { composer, page },
  };
};

export default Compose;
