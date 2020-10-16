import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import CreateOrphanagesMap from "./pages/CreateOrphanage";
import Orphanage from "./pages/Orphanage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanage/:id" component={Orphanage} />
        <Route path="/orphanages/create" component={CreateOrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
