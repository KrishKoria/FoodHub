import { dbConnect } from "@/lib/meals";
import { Meals } from "@/models/Models";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 1;
export async function GET(context) {
  const url = context.url;
  const slug = url.split("/").pop();
  await dbConnect();
  try {
    const meal = await Meals.findOne({ slug: slug });

    if (!meal) {
      return NextResponse.json({ success: false, message: "Meal not found" });
    }

    return NextResponse.json({ success: true, data: meal });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
