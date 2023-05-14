import { OperatingHoursApi } from "./operating-hours-api.model";

export interface OperatingHoursMapApi {
  [dayOfWeek: string]: OperatingHoursApi;
}
