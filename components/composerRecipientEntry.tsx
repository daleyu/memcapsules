import { observer } from "mobx-react-lite";
import { Fragment } from "react";
import { ComposerFormStore } from "../store/composerFormStore";
import { RecipientFrontendModel } from "../types/frontendModels";
import { ComposerOccasionEntry } from "./composerOccasionEntry";
import { FormDivider } from "./formDivider";
import { FormTitle } from "./formTitle";

interface Props {
  recipient: RecipientFrontendModel;
  composerFormStore: ComposerFormStore;
}

export const ComposerRecipientEntry = observer(function ComposerRecipientEntry({
  recipient,
  composerFormStore,
}: Props) {
  return (
    <div>
      <FormTitle>Recipient - {recipient.name}</FormTitle>
      {recipient.occasions.map((savedOccasion) => {
        const occasion = composerFormStore.occasionsById.get(savedOccasion.id);
        if (!occasion) return null;

        return (
          <Fragment key={occasion.id}>
            <ComposerOccasionEntry occasion={occasion} />
            <FormDivider />
          </Fragment>
        );
      })}
    </div>
  );
});
