export class EmptyException extends Error {
  private static readonly defaultMessage = "Field cannot be empty";
  constructor() {
    super(EmptyException.defaultMessage);
  }
}
