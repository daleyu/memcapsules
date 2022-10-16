import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { fetchApi } from "../lib/fetchApi";
import { ComposerFormStore } from "../store/composerFormStore";
import { ComposerFrontendModel } from "../types/frontendModels";
import { ComposerFormProgressBar } from "./composerFormProgressBar";
import { FormButton } from "./formButton";

interface Props {
  composer: ComposerFrontendModel;
  page: number;
  composerFormStore: ComposerFormStore;
}

export const ComposerFormControls = observer(function ComposerFormControls({
  composer,
  page,
  composerFormStore,
}: Props) {
  const router = useRouter();

  const hasPrev = page > 1;
  const hasNext = page < composer.recipients.length;

  const { hasUnsavedOccasions, progress } = composerFormStore;

  const handleSaveAll = async () => {
    for (const occasion of composerFormStore.unsavedOccasions) {
      // TODO bad await in for loop (here to not overload db)
      await fetchApi(`/api/occasion/${occasion.id}`, "PATCH", {
        message: occasion.message.length > 0 ? occasion.message : null,
        videoName: occasion.videoName,
      });
    }

    router.reload();
  };

  return (
    <div>
      <FormButton
        largeSize
        fullWidth
        onClick={handleSaveAll}
        disabled={!hasUnsavedOccasions}
      >
        {hasUnsavedOccasions ? "Save All" : "All Saved!"}
      </FormButton>
      {(hasPrev || hasNext) && (
        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <div style={{ flex: 1 }}>
            <FormButton
              kind="secondary"
              largeSize
              fullWidth
              onClick={() => {
                router.push(`/compose/${composer.id}/${page - 1}`);
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
                router.push(`/compose/${composer.id}/${page + 1}`);
              }}
              disabled={!hasNext}
            >
              Next
            </FormButton>
          </div>
        </div>
      )}
      <ComposerFormProgressBar
        completed={progress.completed}
        total={progress.total}
      />
    </div>
  );
});
