import React from "react";
import LittleTitle from "../components/LittleTitle";
import AllProject from "../components/AllProject";
import Link from "next/link";

const Admin = () => {
  return (
    <>
      <LittleTitle label="ADMIN DASHBOARD" />
      <AllProject />
      <Link href="/admin/newproject">Ajouter un projet</Link>
    </>
  );
};

export default Admin;
