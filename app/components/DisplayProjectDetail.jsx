import React from "react";
import LittleTitle from "./LittleTitle";
import Icon from "./Icon";
import Link from "next/link";

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
    <>
      <LittleTitle label={title} />
      <p>{date}</p>
      <p>{description}</p>
      <img src={firstImage} alt={title} />
      {secondImage && <img src={secondImage} alt={title} />}
      {thirdImage && <img src={thirdImage} alt={title} />}
      <div>{technoIcons}</div>
      <Link href={link}>Visiter le site</Link>
      <Link href={github}>
        <Icon icon="github" />
      </Link>
    </>
  );
};

export default DisplayProjectDetail;
