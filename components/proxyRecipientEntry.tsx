import { observer } from "mobx-react-lite";
import { Fragment } from "react";
import { Recipient } from "../store/proxyFormStore";
import { FormButton } from "./formButton";
import { FormDivider } from "./formDivider";
import { InputWithLabel } from "./inputWithLabel";
import { ProxyOccasionEntry } from "./proxyOccasionEntry";

interface Props {
  recipient: Recipient;
}

export const ProxyRecipientEntry = observer(function ProxyRecipientEntry({
  recipient,
}: Props) {
  return (
    <div>
      <InputWithLabel
        largeSize
        label="Recipient Name:"
        value={recipient.name}
        onChange={(value) => {
          recipient.name = value;
        }}
      />
      <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <InputWithLabel
            label="Email:"
            value={recipient.email}
            onChange={(value) => {
              recipient.email = value;
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <InputWithLabel
            label="Phone:"
            value={recipient.phone}
            onChange={(value) => {
              recipient.phone = value;
            }}
          />
        </div>
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
      <FormDivider smallSize />
      {recipient.occasions.map((occasion, index) => (
        <Fragment key={index}>
          <ProxyOccasionEntry occasion={occasion} />
          <FormDivider smallSize />
        </Fragment>
      ))}
      <FormButton
        onClick={() => {
          const now = new Date();
          recipient.addOccasion(now);
        }}
      >
        Add Occasion
      </FormButton>
    </div>
  );
});
