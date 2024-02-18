import React from "react";
import "./index.css";
import Tabel from "./table/index.js";
import { PersistentStateProvider } from "react-persistent-state";
import Tabel2 from "./table2/index.js";
const App = () => {

  return (
    <>
      {/* <PersistentStateProvider
        storage="localStorage"
        uniqueName="my-table-state"
      > */}
        <Tabel />
        {/* <Tabel2/> */}
       
      {/* </PersistentStateProvider> */}
    </>
  );
};
export default App;
