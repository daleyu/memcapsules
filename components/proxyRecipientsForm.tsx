import { observer } from "mobx-react-lite";
import { Fragment } from "react";
import { ProxyFormStore } from "../store/proxyFormStore";
import { FormButton } from "./formButton";
import { FormDivider } from "./formDivider";
import { ProxyRecipientEntry } from "./proxyRecipientEntry";

interface Props {
  proxyFormStore: ProxyFormStore;
}

export const ProxyRecipientsForm = observer(function ProxyRecipientsForm({
  proxyFormStore,
}: Props) {
  return (
    <div>
      {proxyFormStore.recipients.map((recipient, index) => (
        <Fragment key={index}>
          <ProxyRecipientEntry recipient={recipient} />
          <FormDivider />
        </Fragment>
      ))}
      <FormButton
        largeSize
        onClick={() => {
          proxyFormStore.addRecipient();
        }}
      >
        Add Recipient
      </FormButton>
      <FormDivider />
    </div>
  );
});
