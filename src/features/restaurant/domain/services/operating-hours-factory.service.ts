import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";
import { OperatingHoursMapRepository } from "../../infraestructure/driven/models/operating-hours-map-repository";
import { OperatingHoursMapApi } from "../../infraestructure/drivers/models/operating-hours-map-api.model";
import { DAY_OF_WEEK_KEYS } from "../models/day-of-week";
import { OperatingHours } from "../models/operating-hours";
import { OperatingHoursMap } from "../models/operating-hours-map";

export const createOperatingHoursMapFromApi = (
  operatingHours: OperatingHoursMapApi
): OperatingHoursMap => {
  let operatingHoursMap: OperatingHoursMap = {};
  notUndefinedOrNull(operatingHours);
  Object.entries(operatingHours).map(([dayOfWeek, operatingHours]) => {
    notUndefinedOrNull(dayOfWeek);
    notEmptyString(dayOfWeek);
    notUndefinedOrNull(operatingHours);
    if (!DAY_OF_WEEK_KEYS.includes(dayOfWeek)) {
      throw new Error();
    }
    operatingHoursMap[dayOfWeek] = new OperatingHours(
      operatingHours.startHours,
      operatingHours.endHours
    );
  });
  return operatingHoursMap;
};

export const createOperatingHoursMapFromRepository = (
  operatingHours: OperatingHoursMapRepository
): OperatingHoursMap => {
  let operatingHoursMap: OperatingHoursMap = {};
  notUndefinedOrNull(operatingHours);
  Object.entries(operatingHours).map(([dayOfWeek, operatingHours]) => {
    notUndefinedOrNull(dayOfWeek);
    notEmptyString(dayOfWeek);
    notUndefinedOrNull(operatingHours);
    notEmptyString(operatingHours);
    if (!DAY_OF_WEEK_KEYS.includes(dayOfWeek)) {
      throw new Error();
    }
    const [startHours, endHours] = operatingHours.split(", ");
    operatingHoursMap[dayOfWeek] = new OperatingHours(startHours, endHours);
  });
  return operatingHoursMap;
};
