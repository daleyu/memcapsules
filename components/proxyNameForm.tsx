import { observer } from "mobx-react-lite";
import { ProxyFormStore } from "../store/proxyFormStore";
import { FormSubTitle } from "./formSubTitle";
import { FormTitle } from "./formTitle";
import { InputWithLabel } from "./inputWithLabel";

interface Props {
  proxyFormStore: ProxyFormStore;
}

export const ProxyNameForm = observer(function ProxyNameForm({
  proxyFormStore,
}: Props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <FormTitle>Help Your Loved Ones' Memories Live On!</FormTitle>
      <FormSubTitle>
        Invite a composer (like Grandma) to write a few letters to select
        recipients.
      </FormSubTitle>
      <InputWithLabel
        largeSize
        label="Proxy Name:"
        value={proxyFormStore.proxyName}
        onChange={(value) => {
          proxyFormStore.proxyName = value;
        }}
      />
      <InputWithLabel
        largeSize
        label="Composer Name:"
        value={proxyFormStore.composerName}
        onChange={(value) => {
          proxyFormStore.composerName = value;
        }}
      />
    </form>
  );
});
