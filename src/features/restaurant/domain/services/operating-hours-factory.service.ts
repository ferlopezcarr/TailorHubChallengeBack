import { notUndefinedOrNull } from "@core/domain/services/field-not-provided-validator.service";
import { notEmptyString } from "@core/domain/services/not-empty-validator.service";
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
      operatingHours.endHours,
      operatingHours.endHours
    );
  });
  return operatingHoursMap;
};

export const createOperatingHoursMapFromRepository = (
  operatingHours: OperatingHoursRepository
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
      operatingHours.endHours,
      operatingHours.endHours
    );
  });
  return operatingHoursMap;
};

