import React, { Component } from "react";

class Home extends Component {
  componentDidMount = () => {
    this.props.actions.testAction();
  };

  render() {
    console.log("aaa: ", this.props);
    return (
      <div
        onClick={() => {
          this.props.history.push("/aboutUs");
        }}
      >
        This is Home
        <div
          style={{
            height: 40,
            background: "#f1f1f1",
          }}
        >
          Test: {this.props.apps.test}
        </div>
        <div
          style={{
            height: 40,
            background: "#f9f9f9",
          }}
        >
          MSG: {this.props.apps.msg}
        </div>
      </div>
    );
  }
}

export default Home;
