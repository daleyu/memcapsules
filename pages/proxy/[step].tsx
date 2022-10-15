import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { ProxyNameForm } from "../../components/proxyNameForm";
import { ProxyRecipientsForm } from "../../components/proxyRecipientsForm";
import {
  ImageSideContainer,
  SideContainer,
  TextSideContainer,
} from "../../layouts/proxy.style";
import { SplitLayout } from "../../layouts/splitLayout";
import { fetchApi } from "../../lib/fetchApi";
import HAND from "../../public/images/hand.png";
import { ProxyFormStore } from "../../store/proxyFormStore";
import { ComposerFrontendModel } from "../../types/frontendModels";

type Step = "name" | "recipients";

function getNextStep(step: unknown): Step | null {
  switch (step) {
    case "name":
      return "recipients";
    default:
      return null;
  }
}

function getPrevStep(step: unknown): Step | null {
  switch (step) {
    case "recipients":
      return "name";
    default:
      return null;
  }
}

const Proxy: NextPage = () => {
  const router = useRouter();
  const { step } = router.query;

  const [proxyFormStore] = useState(() => new ProxyFormStore());

  const handleSubmit = () => {
    fetchApi<ComposerFrontendModel>(
      "/api/composer",
      "POST",
      proxyFormStore.composerRequestBody
    ).then((res) => {
      const { id, name } = res;
      router.push(`/proxy/done?composerId=${id}&composerName=${name}`);
    });
  };

  let formElement: ReactNode;

  switch (step) {
    case "name":
      formElement = <ProxyNameForm proxyFormStore={proxyFormStore} />;
      break;
    case "recipients":
      formElement = <ProxyRecipientsForm proxyFormStore={proxyFormStore} />;
      break;
    default:
      formElement = <>Error: invalid step</>;
  }

  const nextStep = getNextStep(step);
  const prevStep = getPrevStep(step);

  const canSubmit = step === "recipients";

  const main = (
    <>
      {formElement}
      {nextStep && (
        <button
          onClick={() => {
            router.push(`/proxy/${nextStep}`);
          }}
        >
          Next
        </button>
      )}
      {prevStep && (
        <button
          onClick={() => {
            router.push(`/proxy/${prevStep}`);
          }}
        >
          Previous
        </button>
      )}
      {canSubmit && <button onClick={handleSubmit}>Submit</button>}
    </>
  );

  return (
    <SplitLayout
      sidebar={
        <div>
          <SideContainer>
            <ImageSideContainer>
              <Image src={HAND} layout="responsive" alt="tsah" />
            </ImageSideContainer>
            <TextSideContainer>
              <p>
                <b> Let's get started on creating your memory capsules!</b>
                <br></br>When would you like to retrieve your memory capsules
                and remember you? When do you to retrieve it?
              </p>
            </TextSideContainer>
          </SideContainer>
        </div>
      }
      main={main}
    />
  );
};

export default Proxy;
