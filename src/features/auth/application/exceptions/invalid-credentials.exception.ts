export class InvalidCredentialsException extends Error {
  private static readonly defaultMessage = "Invalid credentials";
  constructor() {
    super(InvalidCredentialsException.defaultMessage);
  }
}
