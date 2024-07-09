import { DeviceUpdateManyWithoutHousesInput } from "./DeviceUpdateManyWithoutHousesInput";

export type HouseUpdateInput = {
  name?: string | null;
  location?: string | null;
  devices?: DeviceUpdateManyWithoutHousesInput;
};
