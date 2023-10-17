import React from "react";
import Link from "next/link";
import { logoFont } from "../fonts";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <Link href="/" style={logoFont.style} className={styles.logo}>
        ALcADeBnJ()
      </Link>
    </>
  );
};

export default Logo;
