import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import NavbarPage from "./components/views/NavbarPage/NavbarPage";
import FindPage from "./components/views/FindPage/FindPage";
import Auth from "./hoc/auth";

function App() {

  return (    
    <Router>
      <>
    <NavbarPage />
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/find" component={Auth(FindPage, true)} />
        </Switch>
      </>
    </Router>
  );
}

export default App;