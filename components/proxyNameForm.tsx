import { observer } from "mobx-react-lite";
import { ProxyFormStore } from "../store/proxyFormStore";
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
