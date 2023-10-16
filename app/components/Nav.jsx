import React from "react";
import Link from "next/link";
import { body } from "@/app/fonts";
import style from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav style={body.style} className={style.nav}>
      <ul>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};
