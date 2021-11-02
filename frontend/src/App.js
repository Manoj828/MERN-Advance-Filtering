import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BootcampsPage from "./pages/BootcampsPage";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={BootcampsPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
