export class InvalidTokenException extends Error {
  private static readonly defaultMessage = "Invalid token";
  constructor() {
    super(InvalidTokenException.defaultMessage);
  }
}
