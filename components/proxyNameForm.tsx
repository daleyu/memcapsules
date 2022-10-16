import { observer } from "mobx-react-lite";
import {
  CenteringDiv,
  InputButton,
  TextArea,
} from "../layouts/proxyName.style";
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
          <CenteringDiv>
            <TextArea
              type="text"
              value={proxyFormStore.proxyName}
              onChange={(event) => {
                proxyFormStore.proxyName = event.target.value;
              }}
            />
          </CenteringDiv>
        </label>
      </div>

      <div>
        <label>
          <InputButton>Composer Name:</InputButton>
          <CenteringDiv>
            <TextArea
              type="text"
              value={proxyFormStore.composerName}
              onChange={(event) => {
                proxyFormStore.composerName = event.target.value;
              }}
            />
          </CenteringDiv>
        </label>
      </div>
    </form>
  );
});
