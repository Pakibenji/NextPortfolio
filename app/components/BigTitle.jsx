import React from "react";
import { bigTitle } from "@/app/fonts";
import style from "./Title.module.css";

const BigTitle = ({ value }) => {
  return (
    <>
      <h1 style={bigTitle.style} className={style.mainTitle}>{value}</h1>
    </>
  );
};

export default BigTitle;
