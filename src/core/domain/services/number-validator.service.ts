import {
  NotIntegerNumberException,
  NotNaturalNumberException,
  NotNumberException,
} from "../exceptions/number.exception";

export const isNumber = (field: string): number => {
  try {
    return Number(field);
  } catch (error) {
    throw new NotNumberException();
  }
};

export const isIntegerNumber = (field: number): number => {
  if (!Number.isSafeInteger(field)) {
    throw new NotIntegerNumberException();
  }
  return field;
};

export const isNaturalNumber = (field: number): number => {
  if (field <= 0) {
    throw new NotNaturalNumberException();
  }
  return field;
};
