import { isIntegerNumber, isNaturalNumber, notUndefinedOrNull } from "@core/domain/services";

export class UserId {
  private id: number;

  constructor(id: number) {
    notUndefinedOrNull(id);
    isIntegerNumber(id);
    isNaturalNumber(id);
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }
}