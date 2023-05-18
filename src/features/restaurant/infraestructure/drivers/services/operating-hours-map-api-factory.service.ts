import { notUndefinedOrNull } from "@core/domain/services";
import { OperatingHoursMap } from "../../../domain";
import { OperatingHoursApi } from "../models/operating-hours-api.model";
import { OperatingHoursMapApi } from "../models/operating-hours-map-api.model";

export const createOperatingHoursMapApiFromOperatingHours = (
  operatingHoursMap: OperatingHoursMap
): OperatingHoursMapApi => {
  const operatingHoursMapApi: OperatingHoursMapApi = {};
  notUndefinedOrNull(operatingHoursMap);
  Object.entries(operatingHoursMap).forEach(([dayOfWeek, hours]) => {
    const operatingHoursApi: OperatingHoursApi = {
      startHours: hours.getStartHours(),
    };
    if (!!hours.getEndHours()) {
      operatingHoursApi.endHours = hours.getEndHours();
    }
    operatingHoursMapApi[dayOfWeek] = operatingHoursApi;
  });
  return operatingHoursMapApi;
};
