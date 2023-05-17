import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class OperatingHours {
  constructor(private startHours: string, private endHours?: string) {
    notUndefinedOrNull(startHours);
    notEmptyString(startHours);
    this.startHours = startHours;
    if (!!endHours) {
      notEmptyString(endHours);
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
