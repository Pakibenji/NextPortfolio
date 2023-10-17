import Project from "@/models/Project";
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

export const PATCH = async (req, { params }) => {
  const { id } = params;
  const body = await req.json();
  try {
    await connectMongoDB();
    const updatedProject = await Project.findOneAndUpdate(
      { _id: id },
      { ...body },
      { new: true }
    );
    return NextResponse.json("Project successfully Edited", { status: 200 });
  } catch (error) {
    return NextResponse.error(error);
  }
};
