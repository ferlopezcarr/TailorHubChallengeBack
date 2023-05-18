import {
  InvalidMaxNumberException,
  InvalidMinNumberException,
  NotFloatNumberException,
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

export const isFloatNumber = (field: number): number => {
  if (field % 1 === 0) {
    throw new NotFloatNumberException();
  }
  return field;
};

export const isNaturalNumber = (field: number): number => {
  if (field <= 0) {
    throw new NotNaturalNumberException();
  }
  return field;
};

export const minNumber = (field: number, min: number): number => {
  if (field < min) {
    throw new InvalidMinNumberException(min);
  }
  return field;
};

export const maxNumber = (field: number, max: number): number => {
  if (field > max) {
    throw new InvalidMaxNumberException(max);
  }
  return field;
};
