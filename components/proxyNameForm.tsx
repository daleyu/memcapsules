import { observer } from "mobx-react-lite";
import { InputButton } from "../layouts/proxyName.style";
import { ProxyFormStore } from "../store/proxyFormStore";

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
      <div>
        <label>
          <InputButton>Proxy Name:</InputButton>
          <input
            type="text"
            value={proxyFormStore.proxyName}
            onChange={(event) => {
              proxyFormStore.proxyName = event.target.value;
            }}
          />
        </label>
      </div>

      <div>
        <label>
          <InputButton>Composer Name:</InputButton>
          <input
            type="text"
            value={proxyFormStore.composerName}
            onChange={(event) => {
              proxyFormStore.composerName = event.target.value;
            }}
          />
        </label>
      </div>
    </form>
  );
});
