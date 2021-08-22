import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { Switch, Route } from "react-router-dom";

import Main from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
}

export default App;
