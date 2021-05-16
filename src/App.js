import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AppsContainer from "./containers/AppsContainer";
import Todo from "./components/Application/Todo";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AppsContainer(Todo)} />
        </Switch>
      </div>
    );
  }
}
