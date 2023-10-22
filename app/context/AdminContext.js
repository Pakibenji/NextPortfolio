'use client';
import React, { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const logout = () => {
    setIsAdmin(false);
    alert("You are logged out");  
  };

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;