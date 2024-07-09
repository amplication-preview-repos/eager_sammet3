import { Device } from "../device/Device";

export type House = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  devices?: Array<Device>;
};
