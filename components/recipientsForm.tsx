import { observer } from "mobx-react-lite";
import { ProxyFormStore } from "../store/proxyFormStore";
import { RecipientEntry } from "./recipientEntry";

interface Props {
  proxyFormStore: ProxyFormStore;
}

export const RecipientsForm = observer(function RecipientsForm({
  proxyFormStore,
}: Props) {
  console.log("here");
  return (
    <div>
      {proxyFormStore.recipients.map((recipient, index) => (
        <RecipientEntry key={index} recipient={recipient} />
      ))}
      <button
        onClick={() => {
          proxyFormStore.addRecipient();
        }}
      >
        Add recipient
      </button>
    </div>
  );
});
