import {
  notUndefinedOrNull,
  notEmptyString,
  minLength,
  maxLength,
} from "@core/domain/services";

export class Address {
  public static readonly ADDRESS_MIN_LENGTH = 5;
  public static readonly ADDRESS_MAX_LENGTH = 100;

  private address: string;

  constructor(address: string) {
    notUndefinedOrNull(address);
    notEmptyString(address);
    minLength(address, Address.ADDRESS_MIN_LENGTH);
    maxLength(address, Address.ADDRESS_MAX_LENGTH);
    this.address = address;
  }

  public getAddress(): string {
    return this.address;
  }
}
