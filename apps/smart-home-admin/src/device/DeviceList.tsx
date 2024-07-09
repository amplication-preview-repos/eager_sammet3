import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOUSE_TITLE_FIELD } from "../house/HouseTitle";

export const DeviceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Devices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="type" source="typeField" />
        <TextField label="name" source="name" />
        <TextField label="properties" source="properties" />
        <ReferenceField label="House" source="house.id" reference="House">
          <TextField source={HOUSE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
