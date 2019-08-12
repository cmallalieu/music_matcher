/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import { SpotifyApiContext } from 'react-spotify-api';

import AdminLayout from "layouts/User.jsx";

ReactDOM.render(
  <SpotifyApiContext.Provider value={token}>
      <BrowserRouter>
    <Switch>
      <Route path="/user" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/user/login" />
    </Switch>
  </BrowserRouter>
  
  </SpotifyApiContext.Provider>,
    document.getElementById("root")
);