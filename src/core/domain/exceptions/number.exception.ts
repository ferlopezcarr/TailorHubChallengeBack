export class NotNumberException extends Error {
  private static readonly defaultMessage = "Not a number";
  constructor() {
    super(NotNumberException.defaultMessage);
  }
}

export class NotIntegerNumberException extends Error {
  private static readonly defaultMessage = "Not an integer number";
  constructor() {
    super(NotIntegerNumberException.defaultMessage);
  }
}

export class NotNaturalNumberException extends Error {
  private static readonly defaultMessage = "Not a natural number";
  constructor() {
    super(NotNaturalNumberException.defaultMessage);
  }
}
