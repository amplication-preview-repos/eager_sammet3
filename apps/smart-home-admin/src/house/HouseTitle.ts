import { House as THouse } from "../api/house/House";

export const HOUSE_TITLE_FIELD = "name";

export const HouseTitle = (record: THouse): string => {
  return record.name?.toString() || String(record.id);
};
