import { EmptyException } from "../exceptions/empty.exception";

export const notEmptyArray = <T>(field: Array<T>): Array<T> => {
  if (Array.isArray(field) && field.length === 0) {
    throw new EmptyException();
  }
  return field;
}

export const notEmptyString = (field: string): string => {
  if (field.length === 0) {
    throw new EmptyException();
  }
  return field;
}