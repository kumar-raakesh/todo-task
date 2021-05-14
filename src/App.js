import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import { Route, Switch } from "react-router";
import AppsContainer from "./containers/AppsContainer";
import Home from "./components/Application/Home";
import AboutUs from "./components/AboutUs";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AppsContainer(Home)} />
          <Route exact path="/home" component={AppsContainer(Home)} />
          <Route exact path="/aboutUs" component={AppsContainer(AboutUs)} />
        </Switch>
      </div>
    );
  }
}
