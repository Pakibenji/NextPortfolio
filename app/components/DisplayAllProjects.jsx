import React, { useState } from "react";
import styles from "./DisplayProject.module.css";
import { bigTitle } from "@/app/fonts";
import Icon from "./Icon";
import Link from "next/link";
import { Redirect, redirect } from "next/navigation";

const DisplayAllProjects = ({ project }) => {
  const {
    title,
    description,
    shortDescription,
    company,
    firstImage,
    secondImage,
    thirdImage,
    link,
    github,
    technologies,
  } = project;
  const [showOverlay, setShowOverlay] = useState(false);
  const technoArray = technologies.split(",").map((techno) => techno.trim());

  const technoIcons = technoArray.map((techno, index) => {
    return <Icon icon={techno.toLowerCase()} key={index} />;
  });

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };
  return (
    <div
      className={styles.projectContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!showOverlay && <img src={firstImage} className={styles.firstImage} />}

      {showOverlay && (
        <div className={styles.overlay}>
          <h3 className={styles.projectTitle} style={bigTitle.style}>
            {title}
          </h3>
          <p className={styles.projectShortDescription}>{shortDescription}</p>
          <Link href={link} className={styles.projectLink}>
            Visiter le site
          </Link>
          <div className={styles.iconsContainer}>{technoIcons}</div>
        </div>
      )}
    </div>
  );
};

export default DisplayAllProjects;
