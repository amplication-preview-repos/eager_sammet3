import { DeviceCreateNestedManyWithoutHousesInput } from "./DeviceCreateNestedManyWithoutHousesInput";

export type HouseCreateInput = {
  name?: string | null;
  location?: string | null;
  devices?: DeviceCreateNestedManyWithoutHousesInput;
};
