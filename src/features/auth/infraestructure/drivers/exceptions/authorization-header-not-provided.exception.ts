export class AuthorizationHeaderNotProvidedException extends Error {
  private static readonly defaultMessage = "Authorization header not provided";
  constructor() {
    super(AuthorizationHeaderNotProvidedException.defaultMessage);
  }
}
