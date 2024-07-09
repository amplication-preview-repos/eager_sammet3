import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HouseList } from "./house/HouseList";
import { HouseCreate } from "./house/HouseCreate";
import { HouseEdit } from "./house/HouseEdit";
import { HouseShow } from "./house/HouseShow";
import { DeviceList } from "./device/DeviceList";
import { DeviceCreate } from "./device/DeviceCreate";
import { DeviceEdit } from "./device/DeviceEdit";
import { DeviceShow } from "./device/DeviceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SmartHome"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="House"
          list={HouseList}
          edit={HouseEdit}
          create={HouseCreate}
          show={HouseShow}
        />
        <Resource
          name="Device"
          list={DeviceList}
          edit={DeviceEdit}
          create={DeviceCreate}
          show={DeviceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
