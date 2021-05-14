import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import * as AppsActions from "../actions/AppsActions";
import { ActionCreators } from "../actions"

export default function(ComposedComponent) {
  class AppsContainer extends Component {

    
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = state => {
    return {
      apps: state.AppsReducer,
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(ActionCreators, dispatch)
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(AppsContainer);
}
