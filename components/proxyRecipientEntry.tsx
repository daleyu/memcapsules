import { observer } from "mobx-react-lite";
import { Recipient } from "../store/proxyFormStore";
import { ProxyOccasionEntry } from "./proxyOccasionEntry";

interface Props {
  recipient: Recipient;
}

export const ProxyRecipientEntry = observer(function ProxyRecipientEntry({
  recipient,
}: Props) {
  return (
    <div>
      <div>
        <label>
          Recipient name:
          <input
            type="text"
            value={recipient.name}
            onChange={(event) => {
              recipient.name = event.target.value;
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="text"
            value={recipient.email}
            onChange={(event) => {
              recipient.email = event.target.value;
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="text"
            value={recipient.phone}
            onChange={(event) => {
              recipient.phone = event.target.value;
            }}
          />
        </label>
      </div>
      <OccasionList recipient={recipient} />
    </div>
  );
});

const OccasionList = observer(function OccasionList({
  recipient,
}: {
  recipient: Recipient;
}) {
  return (
    <div>
      {recipient.occasions.map((occasion, index) => (
        <ProxyOccasionEntry key={index} occasion={occasion} />
      ))}
      <button
        onClick={() => {
          const now = new Date();
          recipient.addOccasion(now);
        }}
      >
        Add occasion
      </button>
    </div>
  );
});