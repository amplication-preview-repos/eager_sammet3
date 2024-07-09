import { InputJsonValue } from "../../types";
import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";

export type DeviceCreateInput = {
  typeField?: string | null;
  name?: string | null;
  properties?: InputJsonValue;
  house?: HouseWhereUniqueInput | null;
};
