import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectMongoDB();
    const { title, description, shortDescription, Company, firstImage, secondImage, thirdImage, link, github, technologies } =
      await req.json();
    const project = await Project.create({
        title,
        description,
        shortDescription,
        Company,
        firstImage,
        secondImage,
        thirdImage,
        link,
        github,
        technologies,
    });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.error(error);
  }
};