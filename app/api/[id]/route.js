import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { connectMongoDB } from "@/lib/mongodb";

export const GET = async (req, {params}) => {
  try {
    await connectMongoDB();
    const project = await Project.findById(params.id);
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("error", { status: 500 });
  }
};