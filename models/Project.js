import { Schema, models, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    Company: {
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

const Project = models.Post || model("Project", ProjectSchema);
export default Project;
