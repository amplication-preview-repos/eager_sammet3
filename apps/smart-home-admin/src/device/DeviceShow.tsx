import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { HOUSE_TITLE_FIELD } from "../house/HouseTitle";

export const DeviceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="type" source="typeField" />
        <TextField label="name" source="name" />
        <TextField label="properties" source="properties" />
        <ReferenceField label="House" source="house.id" reference="House">
          <TextField source={HOUSE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
