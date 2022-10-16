import { GetServerSideProps, NextPage } from "next";
import absoluteUrl from "next-absolute-url";
import { useRouter } from "next/router";
import { FormButton } from "../../components/formButton";
import { FormTitle } from "../../components/formTitle";
import { InputWithLabel } from "../../components/inputWithLabel";
import SidebarEntry from "../../components/sidebarEntry";
import { SplitLayout } from "../../layouts/splitLayout";

interface Props {
  origin: string;
}

const Done: NextPage<Props> = ({ origin }) => {
  const router = useRouter();

  const composerName = router.query.composerName as string;
  const composerId = router.query.composerId as string;

  const composeUrl = `${origin}/compose/${composerId}`;

  const main = (
    <div>
      <FormTitle>Request Ready!</FormTitle>
      <InputWithLabel
        largeSize
        readOnly
        label="Composer Name:"
        value={composerName}
      />
      <InputWithLabel largeSize readOnly label="Link:" value={composeUrl} />

      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <FormButton
            fullWidth
            onClick={() => {
              // TODO
            }}
          >
            Copy
          </FormButton>
        </div>
        <div style={{ flex: 1 }}>
          <FormButton
            kind="secondary"
            fullWidth
            onClick={() => {
              router.push(`/compose/${composerId}`);
            }}
          >
            Visit
          </FormButton>
        </div>
      </div>
    </div>
  );

  const sidebar = (
    <div>
      <SidebarEntry
        active
        title="Share With Composer"
        description="MemCapsules created a unique link for the designated composer to leave recipients messages."
      />
    </div>
  );

  return <SplitLayout sidebar={sidebar} main={main} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { origin } = absoluteUrl(context.req);

  return {
    props: { origin },
  };
};

export default Done;
