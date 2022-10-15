import { observer } from "mobx-react-lite";
import { ProxyName } from "../layouts/form.style.ts";
import { ProxyFormStore } from "../store/proxyFormStore";

interface Props {
  proxyFormStore: ProxyFormStore;
}

export const ProxyNameForm = observer(function ProxyNameForm({
  proxyFormStore,
}: Props) {
  return (
    <form>
      <div>
        <label>
          <ProxyName> Proxy name: </ProxyName>mn
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
          Composer name:
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
