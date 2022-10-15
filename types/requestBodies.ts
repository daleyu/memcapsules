export interface ComposerRequestBody {
  name: string;
  proxyName: string;
  recipients: Recipient[];
}

interface Recipient {
  name: string;
  occasions: Occasion[];
}

interface Occasion {
  label: string;
  date: string;
}

export interface OccasionRequestBody {
  message: string;
}
