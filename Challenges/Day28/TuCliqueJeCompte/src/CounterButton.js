import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";

function CounterButton(props) {
  return (
    <>
      <button
        className="btn"
        style={{ marginBottom: "5px" }}
        onClick={props.onIncreaseClick}
      >
        Increase
      </button>
      <button
        className="btn"
        style={{ marginBottom: "5px" }}
        onClick={props.onDecreaseClick}
      >
        Decrease
      </button>
      <button className="btn" onClick={props.onResetClick}>
        Reset
      </button>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function () {
      dispatch({ type: "increase" });
    },

    onDecreaseClick: function () {
      dispatch({ type: "decrease" });
    },

    onResetClick: function () {
      dispatch({ type: "reset" });
    },
  };
}

export default connect(null, mapDispatchToProps)(CounterButton);
