import { OperatingHours } from "./operating-hours.model";

export interface OperatingHoursMap {
  [dayOfWeek: string]: OperatingHours;
}
