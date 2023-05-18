export class AccountAlreadyExistsException extends Error {
  private static readonly defaultMessage = "Account already exists";
  constructor() {
    super(AccountAlreadyExistsException.defaultMessage);
  }
}
