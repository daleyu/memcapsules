import type { NextPage } from "next";
import { useState } from "react";
import { SplitLayout } from "../layouts/splitLayout";
import { ProxyFormStore } from "../store/proxyFormStore";

const Proxy: NextPage = () => {
  const [proxyFormStore] = useState(() => new ProxyFormStore());

  return <SplitLayout sidebar={<p>sidebar</p>} main={<p>main</p>} />;
};

export default Proxy;
