import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class OperatingHours {
  private startHours: string;
  private endHours: string;

  constructor(startHours: string, endHours: string) {
    notUndefinedOrNull(startHours);
    notEmptyString(startHours);
    this.startHours = startHours;
    notUndefinedOrNull(endHours);
    notEmptyString(endHours);
    this.endHours = endHours;
  }
}
