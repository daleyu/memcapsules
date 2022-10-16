import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useRef } from "react";
import { fetchApi } from "../lib/fetchApi";
import { sleep } from "../lib/sleep";
import { Occasion } from "../store/composerFormStore";
import {
  TranscribePollResponse,
  TranscribeResponse,
} from "../types/frontendModels";
import { FormButton } from "./formButton";
import { InputWithLabel } from "./inputWithLabel";

const TRANCRIBE_TIMEOUT = 30 * 1000;
const TRANSCRIBE_POLL_INTERVAL = 2000;

interface Props {
  occasion: Occasion;
}

export const ComposerOccasionEntry = observer(function ComposerOccasionEntry({
  occasion,
}: Props) {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const uploadVideo = async (
    file: File
  ): Promise<{ videoName: string | null }> => {
    const formData = new FormData();
    formData.append("file", file, file.name);

    const res = await fetch("/api/video", {
      method: "POST",
      body: formData,
    });

    const { videoName } = await res.json();
    if (typeof videoName === "string") {
      return { videoName };
    }
    return { videoName: null };
  };

  const transcribeVideo = async (
    videoName: string
  ): Promise<{ transcription: string | null }> => {
    const { assemblyId } = await fetchApi<TranscribeResponse>(
      `/api/transcribe?videoName=${videoName}`,
      "GET"
    );

    const pollStart = Date.now();

    while (Date.now() - pollStart < TRANCRIBE_TIMEOUT) {
      await sleep(TRANSCRIBE_POLL_INTERVAL);

      const { transcription } = await fetchApi<TranscribePollResponse>(
        `/api/transcribe/${assemblyId}`,
        "GET"
      );

      if (transcription != null) {
        return {
          transcription: transcription.length > 0 ? transcription : null,
        };
      }
    }

    return { transcription: null };
  };

  const handleInputChange = async () => {
    const file = inputRef.current?.files?.[0];
    if (!file) return;

    const { videoName } = await uploadVideo(file);
    if (!videoName) return;

    occasion.setVideoName(videoName);

    const { transcription } = await transcribeVideo(videoName);
    if (!transcription) return;

    const alreadyHasMessage = occasion.message.trim().length > 0;
    const prefix = alreadyHasMessage
      ? `${occasion.message}\n\n----------------\n\n`
      : "";

    occasion.setMessage(prefix + "Video transcription:\n\n" + transcription);
  };

  return (
    <div>
      <InputWithLabel
        type="textarea"
        largeSize
        label={`Occasion - ${occasion.label}${
          occasion.saved ? "" : " (Not Saved)"
        }`}
        value={occasion.message}
        onChange={(value) => {
          occasion.setMessage(value);
        }}
      />

      {occasion.videoName && (
        <video
          controls
          src={`/videos/${occasion.videoName}`}
          style={{
            marginTop: 24,
            width: "100%",
            aspectRatio: 16 / 9,
          }}
        ></video>
      )}

      <input
        ref={inputRef}
        type="file"
        capture="user"
        accept="video/*"
        onChange={handleInputChange}
        style={{ display: "none" }}
      />
      <FormButton
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        Upload Video (Optional)
      </FormButton>
    </div>
  );
});
