import { InfraestructureException } from "./infraestructure-exception";

export class FieldNotProvided extends InfraestructureException {
  private static readonly defaultMessage = "Field not provided";
  constructor() {
    super(FieldNotProvided.defaultMessage);
  }
}
