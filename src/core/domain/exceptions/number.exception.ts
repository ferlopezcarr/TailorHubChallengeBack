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

export class NotFloatNumberException extends Error {
  private static readonly defaultMessage = "Not a float number";
  constructor() {
    super(NotFloatNumberException.defaultMessage);
  }
}

export class NotNaturalNumberException extends Error {
  private static readonly defaultMessage = "Not a natural number";
  constructor() {
    super(NotNaturalNumberException.defaultMessage);
  }
}

export class InvalidMinNumberException extends Error {
  private static readonly defaultMessage = "Invalid value, value must be at least ";
  constructor(private readonly min: number) {
    super(`${InvalidMinNumberException.defaultMessage} ${min}`);
  }
}

export class InvalidMaxNumberException extends Error {
  private static readonly defaultMessage = "Invalid value, value must be at most ";
  constructor(private readonly max: number) {
    super(`${InvalidMaxNumberException.defaultMessage} ${max}`);
  }
}