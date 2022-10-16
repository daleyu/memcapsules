export interface ComposerFrontendModel {
  id: string;
  name: string;
  proxyName: string | null;
  recipients: RecipientFrontendModel[];
}

export interface RecipientFrontendModel {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  composerName: string;
  occasions: OccasionFrontendModel[];
}

export interface OccasionFrontendModel {
  id: string;
  label: string;
  date: string;
  message: string | null;
  videoName: string | null;
}

export interface VideoResponse {
  videoName: string;
}

export interface TranscribeResponse {
  assemblyId: string;
}

export interface TranscribePollResponse {
  transcription: string | null;
}
