import DisplayProjectDetail from "@/app/components/DisplayProjectDetail";
import React from "react";

const ProjectPage = async ({ params }) => {
  const { id } = params;
  const data = await fetch(`${process.env.API_URL}/api/${id}`);
  const project = await data.json();

  return (
    <>
      <DisplayProjectDetail project={project} />
    </>
  );
};

export default ProjectPage;
