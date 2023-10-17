"use client";
import React from "react";
import styles from "./Form.module.css";
import { body } from "../fonts";

const FormField = ({
  label,
  type,
  id,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className={styles.labelDiv} style={body.style}>
        <label htmlFor={id} className={styles.formLabel}>
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={styles.formInput}
        />
    </div>
  );
};

export default FormField;
