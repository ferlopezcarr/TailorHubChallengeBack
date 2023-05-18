import {
  maxLength,
  notEmptyString,
  notUndefinedOrNull,
} from "@core/domain/services";

export class OperatingHours {
  public static readonly MAX_HOURS_LENGTH = 50;

  constructor(private startHours: string, private endHours?: string) {
    notUndefinedOrNull(startHours);
    notEmptyString(startHours);
    maxLength(startHours, OperatingHours.MAX_HOURS_LENGTH);
    this.startHours = startHours;
    if (!!endHours) {
      notEmptyString(endHours);
      maxLength(endHours, OperatingHours.MAX_HOURS_LENGTH);
      this.endHours = endHours;
    }
  }

  public getStartHours(): string {
    return this.startHours;
  }

  public getEndHours(): string | undefined {
    return this.endHours;
  }
}
