import { DayOfWeek } from "./day-of-week";
import { OperatingHours } from "./operating-hours";

export type OperationHoursMap = {
  [dayOfWeek in DayOfWeek]: OperatingHours
}