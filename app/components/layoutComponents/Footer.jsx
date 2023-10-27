import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { bigTitle } from "../../fonts";

const Footer = () => {
  return (
    <footer className={styles.footer} style={bigTitle.style}>
      <ul>
        <li>
          <p className="">© 2023</p>
        </li>
        <li>
          <p className="">CRÉER PAR BENJAMIN ALCADE</p>
        </li>
        <li>
          <Link className={styles.link} href="https://www.linkedin.com/in/alcadebenjamin/">
            LINKEDIN
          </Link>
        </li>
        <li className={styles.link}>
          <Link className={styles.link} href="https://github.com/Pakibenji">
            GITHUB
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="mailto:alcade.benjamin@gmail.com">
            ALCADE.BENJAMIN@GMAIL.COM
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
