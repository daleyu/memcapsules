export interface ComposerFrontendModel {
  id: string;
  name: string;
  proxyName: string | null;
  recipients: RecipientFrontendModel[];
}

export interface RecipientFrontendModel {
  id: string;
  name: string;
  composerName: string;
  occasionIds: string[];
}

export interface OccasionFrontendModel {
  id: string;
  label: string;
  date: string;
}
