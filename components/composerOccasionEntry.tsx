import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { Occasion } from "../store/composerFormStore";

interface Props {
  occasion: Occasion;
}

export const ComposerOccasionEntry = observer(function ComposerOccasionEntry({
  occasion,
}: Props) {
  const router = useRouter();

  return (
    <div>
      <h2>Occasion: {occasion.label}</h2>
      <textarea
        value={occasion.message}
        onChange={(event) => {
          occasion.setMessage(event.target.value);
        }}
      />
      <p>{occasion.saved ? "Saved" : "Unsaved"}</p>
    </div>
  );
});
