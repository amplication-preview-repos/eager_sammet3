import { InputJsonValue } from "../../types";
import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";

export type DeviceUpdateInput = {
  typeField?: string | null;
  name?: string | null;
  properties?: InputJsonValue;
  house?: HouseWhereUniqueInput | null;
};
