"use client";
import React, { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const Router = useRouter();

  const checkIsAdmin = () => {
    if (!isAdmin) {
      alert("You are not logged in");
      Router.push("/admin");
    }
  };

  const logout = () => {
    setIsAdmin(false);
    alert("You are logged out");
  };

  return (
    <AdminContext.Provider
      value={{ isAdmin, setIsAdmin, logout, checkIsAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
