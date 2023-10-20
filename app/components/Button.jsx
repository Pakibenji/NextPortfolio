import React from "react";
import style from "./Button.module.css";
import { bigTitle } from "../fonts";

const Button = ({ label, func }) => {
  return (
    <button className={style.button} style={bigTitle.style} onClick={func}>
      {label}
    </button>
  );
};

export default Button;
