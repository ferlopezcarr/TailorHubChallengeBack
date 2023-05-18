import { notUndefinedOrNull } from "@core/domain/services";
import { OperatingHoursMapRepository } from "../models/operating-hours-map-repository";
import { OperatingHoursMap } from "../../../domain";

export const createOperatingHoursMapRepositoryFromOperatingHoursMap = (
  operatingHoursMap: OperatingHoursMap
): OperatingHoursMapRepository => {
  const operatingHoursMapRepository: OperatingHoursMapRepository = {};
  notUndefinedOrNull(operatingHoursMap);
  Object.entries(operatingHoursMap).forEach(([dayOfWeek, hours]) => {
    const startHours = hours.getStartHours();
    const endHours = !!hours.getEndHours() ? `, ${hours.getEndHours()}` : "";
    const operatingHoursRepository = `${startHours}${endHours}`;
    operatingHoursMapRepository[dayOfWeek] = operatingHoursRepository;
  });
  return operatingHoursMapRepository;
};
