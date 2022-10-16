import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Occasion } from "../store/composerFormStore";
import { VideoResponse } from "../types/frontendModels";

interface Props {
  occasion: Occasion;
}

export const ComposerOccasionEntry = observer(function ComposerOccasionEntry({
  occasion,
}: Props) {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = async () => {
    const file = inputRef.current?.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file, file.name);

    const res = await fetch("/api/video", {
      method: "POST",
      body: formData,
    });

    const { videoName } = (await res.json()) as VideoResponse;

    if (typeof videoName === "string") {
      occasion.setVideoName(videoName);
    }
  };

  return (
    <div>
      <h2>Occasion: {occasion.label}</h2>
      <textarea
        value={occasion.message}
        onChange={(event) => {
          occasion.setMessage(event.target.value);
        }}
      />
      {occasion.videoName && (
        <video controls src={`/videos/${occasion.videoName}`}></video>
      )}
      <input
        ref={inputRef}
        type="file"
        capture="user"
        accept="video/*"
        onChange={handleInputChange}
      />
      <p>{occasion.saved ? "Saved" : "Unsaved"}</p>
    </div>
  );
});
