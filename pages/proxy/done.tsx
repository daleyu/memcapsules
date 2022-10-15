import { NextPage } from "next";
import absoluteUrl from "next-absolute-url";
import Link from "next/link";
import { useRouter } from "next/router";
import { SplitLayout } from "../../layouts/splitLayout";

interface Props {
  origin: string;
}

const Done: NextPage<Props> = ({ origin }) => {
  const router = useRouter();

  const { composerName, composerId } = router.query;

  const composeUrl = `${origin}/compose/${composerId}`;

  const main = (
    <div>
      <h1>Done!</h1>
      <h2>Composer name: {composerName}</h2>
      <h2>Link:</h2>
      <Link href={composeUrl}>{composeUrl}</Link>
    </div>
  );

  return <SplitLayout sidebar={<></>} main={main} />;
};

Done.getInitialProps = ({ req }) => {
  const { origin } = absoluteUrl(req);
  return { origin };
};

export default Done;
