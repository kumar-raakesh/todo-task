import React, { useEffect, useState } from "react";

function AboutUs(props) {
  useEffect(() => {
    console.log("Hooks working", props);
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{ padding: 8 }}
        onClick={() => {
          props.history.push("/aboutUs");
        }}
      >
        ABOUTUS
      </button>
      <button
        onClick={() => {
          props.history.push("/home");
        }}
        style={{ padding: 8 }}
      >
        HOME
      </button>
    </div>
  );
}

export default AboutUs;
