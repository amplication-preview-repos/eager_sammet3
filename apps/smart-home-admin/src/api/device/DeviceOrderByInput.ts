import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  name?: SortOrder;
  properties?: SortOrder;
  houseId?: SortOrder;
};
