import { memo } from "react";
import { RecipientFrontendModel } from "../types/frontendModels";
import { ComposerOccasionEntry } from "./composerOccasionEntry";

interface Props {
  recipient: RecipientFrontendModel;
}

export const ComposerRecipientForm = memo(function ComposerRecipientForm({
  recipient,
}: Props) {
  return (
    <div>
      <h1>Recipient: {recipient.name}</h1>
      {recipient.occasions.map((occasion) => (
        <ComposerOccasionEntry key={occasion.id} occasion={occasion} />
      ))}
    </div>
  );
});
