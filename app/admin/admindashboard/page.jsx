"use client";
import React, { useContext, useEffect } from "react";
import LittleTitle from "../../components/LittleTitle";
import AllProject from "../../components/AllProject";
import Link from "next/link";
import { AdminContext } from "../../context/AdminContext";
import Button from "@/app/components/Button";

const AdminDashboard = () => {
  const { isAdmin, logout, checkIsAdmin } = useContext(AdminContext);

  useEffect(() => {
    checkIsAdmin();
  }, [isAdmin]);

  return (
    <>
      {isAdmin && (
        <>
          <LittleTitle label="ADMIN DASHBOARD" />
          <AllProject />
          <Link href="/admin/newproject">NEW PROJECT</Link>
          <Button label="LOGOUT" func={logout} />
        </>
      )}
    </>
  );
};

export default AdminDashboard;
