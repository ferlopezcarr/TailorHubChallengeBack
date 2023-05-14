export class FieldNotProvidedException extends Error {
  private static readonly defaultMessage = "Field not provided";
  constructor() {
    super(FieldNotProvidedException.defaultMessage);
  }
}
