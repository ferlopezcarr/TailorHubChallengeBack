import { notUndefinedOrNull } from "../../../../core/domain/services/field-not-provided-validator.service";

export class Address {
  private address: string;

  constructor(address: string) {
    notUndefinedOrNull(address);
    this.address = address;
  }
}
