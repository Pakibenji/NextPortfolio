"use client";
import React, { useEffect, useState } from "react";
import DisplayAllProjects from "./DisplayAllProjects";
import IsLoading from "./isLoading";

const AllProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/all");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchProjects();
  }, []);

  if (loading) return <IsLoading />;

  if (error) return <div>Error: {error.message}</div>;

  if (!projects) return <div>No projects found</div>;

  if (projects.length === 0) return <div>No projects found</div>;

  if (projects)
    return projects.map((project) => (
      <DisplayAllProjects key={project._id} project={project} />
    ));
};

export default AllProject;
