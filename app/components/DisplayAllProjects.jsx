"use client";
import React, { useState } from "react";
import styles from "./DisplayProject.module.css";
import { bigTitle, body } from "@/app/fonts";
import Icon from "./Icon";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DisplayAllProjects = ({ project }) => {
  const { title, date, shortDescription, firstImage, link, technologies } =
    project;
  const router = useRouter();

  const technoArray = technologies.split(",").map((techno) => techno.trim());
  const handleRedirect = () => router.push(`/project/${project._id}`);

  const technoIcons = technoArray.map((techno, index) => {
    return <Icon icon={techno.toLowerCase()} key={index} />;
  });

  return (
    <div className={styles.projectContainer} style={body.style}>
      <div className={styles.cardEffect}>
        <div className={styles.flipCardFront}>
          <img src={firstImage} className={styles.firstImage} width="300px" />
        </div>
        <div className={styles.overlay}>
          <h3
            className={styles.projectTitle}
            style={bigTitle.style}
            onClick={handleRedirect}
          >
            {title}
          </h3>
          <p className={styles.projectDate}>{date}</p>
          <p className={styles.projectShortDescription}>{shortDescription}</p>
          <Link href={link} className={styles.projectLink}>
            Visiter le site
          </Link>
          <div className={styles.iconsContainer}>{technoIcons}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAllProjects;
