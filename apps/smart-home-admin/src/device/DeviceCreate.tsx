import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HouseTitle } from "../house/HouseTitle";

export const DeviceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <TextInput label="name" source="name" />
        <div />
        <ReferenceInput source="house.id" reference="House" label="House">
          <SelectInput optionText={HouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
