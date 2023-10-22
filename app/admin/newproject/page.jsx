"use client";
import LittleTitle from "@/app/components/LittleTitle";
import NewProjectForm from "@/app/components/form/NewProjectForm";
import React, { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AdminContext } from "@/app/context/AdminContext";

const NewProject = () => {
  const router = useRouter();
  const { isAdmin } = useContext(AdminContext);

  useEffect(() => {
    if (!isAdmin) {
      alert("Vous n'êtes pas connecté");
      router.push("/admin");
    }
  }, [isAdmin]);
  return (
    <>
      {isAdmin && (
        <>
          <LittleTitle label="NEW PROJECT" />
          <NewProjectForm />
        </>
      )}
    </>
  );
};

export default NewProject;
