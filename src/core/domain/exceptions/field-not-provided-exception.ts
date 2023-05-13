import { DomainException } from "./domain-exception";

export class FieldNotProvided extends DomainException {
  private static readonly defaultMessage = "Field not provided";
  constructor() {
    super(FieldNotProvided.defaultMessage);
  }
}
