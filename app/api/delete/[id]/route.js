import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    await connectMongoDB();
    const project = await Project.findByIdAndDelete(params.id);
    return NextResponse.json("project deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("error", { status: 500 });
  }
};