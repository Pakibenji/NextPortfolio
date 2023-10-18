import { Schema, models, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    description: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    company: {
      type: String,
    },
    firstImage: {
      type: String,
    },
    secondImage: {
      type: String,
    },
    thirdImage: {
      type: String,
    },
    link: {
      type: String,
    },
    github: {
      type: String,
    },
    technologies: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = models.Project || model("Project", ProjectSchema);
export default Project;
