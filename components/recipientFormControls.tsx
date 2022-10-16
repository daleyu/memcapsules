import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { RecipientFrontendModel } from "../types/frontendModels";
import { FormButton } from "./formButton";

interface Props {
  recipient: RecipientFrontendModel;
  page: number;
}

export const RecipientFormControls = observer(function RecipientFormControls({
  recipient,
  page,
}: Props) {
  const router = useRouter();

  const hasPrev = page > 1;
  const hasNext = page < recipient.occasions.length;

  if (!hasPrev && !hasNext) {
    return null;
  }

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div style={{ flex: 1 }}>
        <FormButton
          kind="secondary"
          largeSize
          fullWidth
          onClick={() => {
            router.push(`/view/${recipient.id}/${page - 1}`);
          }}
          disabled={!hasPrev}
        >
          Previous
        </FormButton>
      </div>
      <div style={{ flex: 1 }}>
        <FormButton
          kind="secondary"
          largeSize
          fullWidth
          onClick={() => {
            router.push(`/view/${recipient.id}/${page + 1}`);
          }}
          disabled={!hasNext}
        >
          Next
        </FormButton>
      </div>
    </div>
  );
});
