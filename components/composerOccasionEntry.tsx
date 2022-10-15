import { useRouter } from "next/router";
import { memo, useState } from "react";
import { fetchApi } from "../lib/fetchApi";
import { OccasionFrontendModel } from "../types/frontendModels";

interface Props {
  occasion: OccasionFrontendModel;
}

export const ComposerOccasionEntry = memo(function ComposerOccasionEntry({
  occasion,
}: Props) {
  const router = useRouter();

  const [message, setMessage] = useState(occasion.message ?? "");

  const isUnsaved = message !== (occasion.message ?? "");

  const save = () => {
    fetchApi(`/api/occasion/${occasion.id}`, "PATCH", {
      message,
    }).then(() => {
      router.reload();
    });
  };

  return (
    <div>
      <h2>Occasion: {occasion.label}</h2>
      <textarea
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={save} disabled={!isUnsaved}>
        {isUnsaved ? "Save" : "Saved"}
      </button>
    </div>
  );
});
