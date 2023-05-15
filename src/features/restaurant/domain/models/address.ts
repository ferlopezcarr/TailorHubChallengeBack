import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class Address {
  private address: string;

  constructor(address: string) {
    notUndefinedOrNull(address);
    notEmptyString(address);
    this.address = address;
  }
}
