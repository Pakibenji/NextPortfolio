"use client";
import React, { useState } from "react";
import FormField from "./FormField";
import FormButton from "./FormButton";
import { useRouter } from "next/navigation";
import styles from "./Form.module.css";

const NewProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    shortDescription: "",
    company: "",
    firstImage: "",
    secondImage: "",
    thirdImage: "",
    link: "",
    github: "",
    technologies: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert("Your project has been added!");
      router.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles.formContainer}>
      <FormField
        label="Title"
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <FormField
        label="Date"
        type="text"
        name="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <FormField
        label="Description"
        type="text"
        name="description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <FormField
        label="Short Description"
        type="text"
        name="shortDescription"
        value={formData.shortDescription}
        onChange={(e) =>
          setFormData({ ...formData, shortDescription: e.target.value })
        }
      />
      <FormField
        label="Company"
        type="text"
        name="company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <FormField
        label="First Image"
        type="text"
        name="firstImage"
        value={formData.firstImage}
        onChange={(e) =>
          setFormData({ ...formData, firstImage: e.target.value })
        }
      />
      <FormField
        label="Second Image"
        type="text"
        name="secondImage"
        value={formData.secondImage}
        onChange={(e) =>
          setFormData({ ...formData, secondImage: e.target.value })
        }
      />
      <FormField
        label="Third Image"
        type="text"
        name="thirdImage"
        value={formData.thirdImage}
        onChange={(e) =>
          setFormData({ ...formData, thirdImage: e.target.value })
        }
      />
      <FormField
        label="Link"
        type="text"
        name="link"
        value={formData.link}
        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
      />
      <FormField
        label="Github"
        type="text"
        name="github"
        value={formData.github}
        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
      />
      <FormField
        label="Technologies"
        type="text"
        name="technologies"
        value={formData.technologies}
        onChange={(e) =>
          setFormData({ ...formData, technologies: e.target.value })
        }
      />
      <FormButton type="submit" text="Add Project" />
    </form>
  );
};

export default NewProjectForm;
