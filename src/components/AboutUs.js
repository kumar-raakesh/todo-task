import React, { Component } from "react";

class AboutUs extends Component {
  componentDidMount = () => {
    this.props.actions.testAction();
  };

  render() {
    console.log("aaa: ", this.props);
    return (
      <div
        onClick={() => {
          this.props.history.push("/home");
        }}
      >
        This is AboutUs
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

export default AboutUs;
