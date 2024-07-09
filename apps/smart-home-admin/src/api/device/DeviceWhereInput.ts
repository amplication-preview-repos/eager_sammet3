import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";

export type DeviceWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  name?: StringNullableFilter;
  properties?: JsonFilter;
  house?: HouseWhereUniqueInput;
};
