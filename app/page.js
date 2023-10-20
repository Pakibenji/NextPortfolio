import React from "react";
import BigTitle from "./components/BigTitle";
import Technos from "./components/Technos";
import CtaButton from "./components/CtaButton";
import AllProject from "./components/AllProject";
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <BigTitle value="BENJAMIN AlCADE" />
      <Technos />
      <CtaButton />
      <section className={styles.allProjectsContainer}>
        <AllProject />
      </section>
    </>
  );
};

export default Home;
