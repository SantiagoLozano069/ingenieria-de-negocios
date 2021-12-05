import React from "react";
import { Switch, Route } from "react-router-dom";
import IngenieriaDeNegocios from "./Components/IngenieriaDeNegocios/IngenieriaDeNegocios";
import Rutas from "./Rutas";

const Routes = () => {
  return (
    <Switch>
      <Rutas type={privado} path="/inicio" component={IngenieriaDeNegocios} />
    </Switch>
  );
};

export default Routes;
