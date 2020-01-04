import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
 
import { isAuthenticated } from "./services/auth";
import Index from "./pages/Index";
import PaginalPrincipal from "./pages/PaginalPrincipal";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (  
  <BrowserRouter>
    <Fragment>
      <Switch>
        <PrivateRoute path="/home" component={PaginalPrincipal} />
        
        <Route path="/" component={Index} />
        
      </Switch>
    </Fragment>
  </BrowserRouter>
);

// Rota Publica (acesso sem login): <Route/>
// Rota privada (acesso com login)> <PrivateRoute/> 

export default Routes;
