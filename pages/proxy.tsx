import type { NextPage } from "next";
import { SplitLayout } from "../layouts/splitLayout";

const Proxy: NextPage = () => {
  return <SplitLayout sidebar={<p>sidebar</p>} main={<p>main</p>} />;
};

export default Proxy;
