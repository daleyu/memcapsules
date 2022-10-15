import { makeAutoObservable, observable } from "mobx";
import { ComposerRequestBody } from "../types/requestBodies";

export class ProxyFormStore {
  composerName = "";
  proxyName = "";
  recipients: Recipient[] = [];

  constructor() {
    makeAutoObservable(this, {
      recipients: observable.struct,
    });
  }

  get composerRequestBody(): ComposerRequestBody {
    return {
      name: this.composerName,
      proxyName: this.proxyName,
      recipients: this.recipients.map((recipient) => ({
        name: recipient.name,
        occasions: recipient.occasions.map((occasion) => ({
          label: occasion.label,
          date: occasion.date.toISOString(),
        })),
      })),
    };
  }
}

export class Recipient {
  name = "";
  occasions: Occasion[] = [];

  constructor() {
    makeAutoObservable(this, {
      occasions: observable.struct,
    });
  }
}

export class Occasion {
  label = "";
  date: Date;

  constructor(defaultDate: Date) {
    this.date = defaultDate;
    makeAutoObservable(this);
  }
}
