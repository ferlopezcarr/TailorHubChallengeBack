export class MinLengthExceededException extends Error {
  private static readonly defaultMessage = "Invalid length, length must be at least ";
  constructor(minLength: number) {
    super(`${MinLengthExceededException.defaultMessage} ${minLength}`);
  }
}

export class MaxLengthExceededException extends Error {
  private static readonly defaultMessage = "Invalid length, length must be at most ";
  constructor(maxLength: number) {
    super(`${MaxLengthExceededException.defaultMessage} ${maxLength}`);
  }
}
