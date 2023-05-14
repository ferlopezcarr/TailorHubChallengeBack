export class NotIntegerNumberException extends Error {
  private static readonly defaultMessage = "It must be an integer number";
  constructor() {
    super(NotIntegerNumberException.defaultMessage);
  }
}

export class NotNaturalNumberException extends Error {
  private static readonly defaultMessage = "It must be a natural number";
  constructor() {
    super(NotNaturalNumberException.defaultMessage);
  }
}
