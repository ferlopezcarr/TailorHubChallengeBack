import { OperatingHours } from "./operating-hours";

export interface OperatingHoursMap {
  [dayOfWeek: string]: OperatingHours;
}
