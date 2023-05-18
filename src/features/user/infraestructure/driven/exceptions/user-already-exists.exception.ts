export class UserAlreadyExistsException extends Error {
  private static readonly defaultMessage = "User already exists";
  constructor() {
    super(UserAlreadyExistsException.defaultMessage);
  }
}
