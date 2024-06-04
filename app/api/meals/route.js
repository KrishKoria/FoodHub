import { dbConnect } from "@/lib/meals";
import { Meals } from "@/models/Models";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 1;
export async function GET() {
  await dbConnect();
  try {
    const meals = await Meals.find({});
    return NextResponse.json({ success: true, data: meals });
  } catch (error) {
    NextResponse.json({ success: false });
  }
}
