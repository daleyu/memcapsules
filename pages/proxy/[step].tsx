import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode, useCallback, useState } from "react";
import { ProxyNameForm } from "../../components/ProxyNameForm";
import { SplitLayout } from "../../layouts/splitLayout";
import { fetchApi } from "../../lib/fetchApi";
import { ProxyFormStore } from "../../store/proxyFormStore";
import { ComposerFrontendModel } from "../../types/frontendModels";

const Name: NextPage = () => {
  const router = useRouter();
  const { step } = router.query;

  const [proxyFormStore] = useState(() => new ProxyFormStore());

  const submit = useCallback(() => {
    fetchApi<ComposerFrontendModel>(
      "POST",
      proxyFormStore.composerRequestBody
    ).then((res) => {
      const { id } = res;
      // TODO redirect
    });

    fetch("/api/proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(proxyFormStore.composerRequestBody),
    });
  }, [proxyFormStore.composerRequestBody]);

  let formElement: ReactNode;

  switch (step) {
    case "name":
      formElement = <ProxyNameForm />;
      break;
    default:
      formElement = <>Error: invalid step</>;
  }

  return <SplitLayout sidebar={<p>sidebar</p>} main={formElement} />;
};

export default Name;
