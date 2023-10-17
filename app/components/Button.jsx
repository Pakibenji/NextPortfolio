import React from "react";
import style from "./Button.module.css";
import { bigTitle } from "../fonts";

const Button = ({ label }) => {
  return (
    <button className={style.button} style={bigTitle.style}>
      {label}
    </button>
  );
};

export default Button;
