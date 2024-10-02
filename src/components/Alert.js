import React from "react";
import "./Alert.css";

const Alert = ({ type, text }) => {
  return <div className={`alert alert-${type}`}></div>;
};

export default Alert;
