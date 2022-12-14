import { memo } from "react";
import { VIDEOS_CONTAINER_URL } from "../lib/azureStorage";
import { OccasionFrontendModel } from "../types/frontendModels";
import { InputWithLabel } from "./inputWithLabel";

interface Props {
  occasion: OccasionFrontendModel;
}

export const RecipientOccasionEntry = memo(function RecipientOccasionEntry({
  occasion,
}: Props) {
  if (!occasion.message) {
    return null;
  }

  return (
    <div>
      <InputWithLabel
        type="textarea"
        largeSize
        readOnly
        label={`Message For - ${occasion.label}`}
        value={occasion.message}
      />
      {occasion.videoName && (
        <video
          controls
          src={`${VIDEOS_CONTAINER_URL}/${occasion.videoName}`}
          style={{
            marginTop: 24,
            width: "100%",
            aspectRatio: 16 / 9,
          }}
        />
      )}
    </div>
  );
});
