import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeviceListRelationFilter } from "../device/DeviceListRelationFilter";

export type HouseWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  devices?: DeviceListRelationFilter;
};
