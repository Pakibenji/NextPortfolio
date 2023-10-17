import Project from "@/models/Project";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
    await connectMongoDB();
    const projects = await Project.find({}).lean();
    return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.error(error);
    }
};