//libs
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
//constants
import { HOME, CONTACT, OUR_GEAR, ABOUT_US } from "src/shared/constants";

//Views
import { Home, ContactUs, OurGear, AboutUs } from "src/views";

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={HOME} component={Home} />
        <Route path={CONTACT} component={ContactUs} />
        <Route path={OUR_GEAR} component={OurGear} />
        <Route path={ABOUT_US} component={AboutUs} />
        <Route path="*" component={() => <Redirect push to={HOME} />} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
