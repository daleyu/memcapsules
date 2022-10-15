import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode, useCallback, useState } from "react";
<<<<<<< HEAD
import { ProxyNameForm } from "../../components/ProxyNameForm";
import { ReceipientNameForm } from "../../components/receipientNameForm";
import { SideContainer } from "../../layouts/proxy.style.ts";
=======
import { ProxyNameForm } from "../../components/proxyNameForm";
>>>>>>> 3ba29941a9550b10fed852232144cc6153a05b36
import { SplitLayout } from "../../layouts/splitLayout";
import { fetchApi } from "../../lib/fetchApi";
import HAND from "../../public/images/hand.png";
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
      formElement = <ProxyNameForm proxyFormStore={proxyFormStore} />;
      break;
    case "receipient":
      formElement = <ReceipientNameForm />;
    default:
      formElement = <>Error: invalid step</>;
  }

  return (
    <SplitLayout
      sidebar={
        <div>
          <SideContainer>
            <Image src={HAND} layout="responsive" alt="tsah" />
          </SideContainer>
        </div>
      }
      main={formElement}
    />
  );
};

export default Name;
