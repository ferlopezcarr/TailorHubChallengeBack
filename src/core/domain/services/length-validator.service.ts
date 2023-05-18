import { MaxLengthExceededException, MinLengthExceededException } from "../exceptions";

export const minLength = (field: string, minLength: number): string => {
  if (!!field && field.length < minLength) {
    throw new MinLengthExceededException(minLength);
  }
  return field;
}

export const maxLength = (field: string, maxLength: number): string => {
  if (!!field && field.length > maxLength) {
    throw new MaxLengthExceededException(maxLength);
  }
  return field;
}
