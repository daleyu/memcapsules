import { makeAutoObservable } from "mobx";
import {
  ComposerFrontendModel,
  OccasionFrontendModel,
} from "../types/frontendModels";

export class ComposerFormStore {
  occasionsById: Map<string, Occasion>;

  constructor(savedComposer: ComposerFrontendModel) {
    this.occasionsById = new Map();

    savedComposer.recipients.forEach((recipient) => {
      recipient.occasions.forEach((occasion) => {
        this.occasionsById.set(occasion.id, new Occasion(occasion));
      });
    });

    makeAutoObservable(this);
  }

  updateSavedComposer(savedComposer: ComposerFrontendModel) {
    savedComposer.recipients.forEach((recipient) => {
      recipient.occasions.forEach((occasion) => {
        this.occasionsById.set(occasion.id, new Occasion(occasion));
      });
    });

    savedComposer.recipients.forEach((recipient) => {
      recipient.occasions.forEach((occasion) => {
        this.occasionsById
          .get(occasion.id)
          ?.updateSavedMessage(occasion.message);
      });
    });
  }

  get unsavedOccasions(): Occasion[] {
    return Array.from(this.occasionsById.values()).filter(
      (occasion) => !occasion.saved
    );
  }

  get hasUnsavedOccasions(): boolean {
    return this.unsavedOccasions.length > 0;
  }

  get progress(): { completed: number; total: number } {
    const total = this.occasionsById.size;
    const completed = Array.from(this.occasionsById.values()).filter(
      (occasion) => occasion.completed
    ).length;

    return { completed, total };
  }
}

export class Occasion {
  id: string;
  label: string;
  message: string;
  videoName: string | null;
  saved: boolean;

  constructor(savedOccasion: OccasionFrontendModel) {
    this.id = savedOccasion.id;
    this.label = savedOccasion.label;
    this.message = savedOccasion.message ?? "";
    this.videoName = savedOccasion.videoName;
    this.saved = true;

    makeAutoObservable(this);
  }

  setMessage(message: string) {
    this.message = message;
    this.saved = false;
  }

  setVideoName(videoName: string) {
    this.videoName = videoName;
    this.saved = false;
  }

  updateSavedMessage(savedMessage: string | null) {
    this.saved = this.message === savedMessage ?? "";
  }

  updateSavedOccasion(savedOccasion: OccasionFrontendModel) {
    const messageSaved = this.message === savedOccasion.message ?? "";
    const videoNameSaved = this.videoName === savedOccasion.videoName;
  }

  get completed() {
    return this.message.length > 0 && this.saved;
  }
}
