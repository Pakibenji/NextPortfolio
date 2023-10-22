"use client";
import React, { useContext, useState } from "react";
import styles from "./Form.module.css";
import FormField from "./FormField";
import FormButton from "./FormButton";
import { useRouter } from "next/navigation";
import { AdminContext } from "../../context/AdminContext";

const AdminLogin = () => {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsAdmin } = useContext(AdminContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      adminName === process.env.NEXT_PUBLIC_NAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setIsAdmin(true);
      alert("admin connect");
      setAdminName("");
      setPassword("");
      router.push("/admin/admindashboard");
    } else {
      alert("error connect");
      router.push("/");
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <FormField
        label="Admin Name"
        type="text"
        name="adminName"
        onChange={(e) => setAdminName(e.target.value)}
      />
      <FormField
        label="Password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormButton label="Login" type="submit" />
    </form>
  );
};

export default AdminLogin;
