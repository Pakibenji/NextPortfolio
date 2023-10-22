"use client";
import React, { useContext, useEffect } from "react";
import LittleTitle from "../../components/LittleTitle";
import AllProject from "../../components/AllProject";
import Link from "next/link";
import { AdminContext } from "../../context/AdminContext";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();
  const { isAdmin, logOut } = useContext(AdminContext);

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
          <LittleTitle label="ADMIN DASHBOARD" />
          <AllProject />
          <Link href="/admin/newproject">Ajouter un projet</Link>
          <button onClick={logOut}>Log out</button>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
