export class TokenNotProvidedException extends Error {
  private static readonly defaultMessage = "Token not provided";
  constructor() {
    super(TokenNotProvidedException.defaultMessage);
  }
}
