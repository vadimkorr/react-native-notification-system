import React from "react";
import { Routing } from "./src/Routing";
import { configure } from "mobx";

configure({
  enforceActions: "observed"
});

const App = () => <Routing />;

export default App;
