import React from "react";
import LittleTitle from "./LittleTitle";
import Icon from "./Icon";
import Link from "next/link";
import styles from "./DisplayProjectDetail.module.css"

const DisplayProjectDetail = ({ project }) => {
  const {
    title,
    date,
    description,
    firstImage,
    secondImage,
    thirdImage,
    link,
    github,
    technologies,
  } = project;

  const technoArray = technologies.split(",").map((techno) => techno.trim());
  const technoIcons = technoArray.map((techno, index) => {
    return <Icon icon={techno.toLowerCase()} key={index} />;
  });
  return (
    <div className={styles.detailsContainer}>
      <LittleTitle label={title} />
      <p>{date}</p>
      <p className={styles.description}>{description}</p>
      <img src={firstImage} alt={title} />
      {secondImage && <img src={secondImage} alt={title} />}
      {thirdImage && <img src={thirdImage} alt={title} />}
      <div className={styles.technos}>{technoIcons}</div>
      <Link href={link}>Visiter le site</Link>
      <Link href={github}>
        <Icon icon="github" />
      </Link>
    </div>
  );
};

export default DisplayProjectDetail;
