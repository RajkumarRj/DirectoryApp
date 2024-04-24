import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  const buttonStyle = {
    display: "flex",
    width: "70%",
    justifyContent: "flex-start",
    marginLeft: "50px",
    gap: "50px",
  };

  const button = {
    backgroundColor: "#4472C4",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
    textDecoration: "none",
  };
  return (
    <div style={buttonStyle}>
      <button style={button}>
        <Link to={"/addPerson"} style={button}>
          Add Person
        </Link>
      </button>
      <button style={button}>
        <Link to={"/retrieve"} style={button}>
          Retrieve information
        </Link>
      </button>
    </div>
  );
};

export default Button;
