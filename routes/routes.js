//libs
import React from "react";

//helper
// import { updateAuthToken } from "src/shared/services";

//routes
// import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {
  // if (authToken) {
  //   // updateAuthToken(authToken);
  //   return <PrivateRoutes />;
  // }
  return <PublicRoutes />;
};

export default Routes;
