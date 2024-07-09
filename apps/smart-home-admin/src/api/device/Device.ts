import { JsonValue } from "type-fest";
import { House } from "../house/House";

export type Device = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  name: string | null;
  properties: JsonValue;
  house?: House | null;
};
