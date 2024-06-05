import { dbConnect } from "@/lib/meals";
import { Meals } from "@/models/Models";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 1;
export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  const createdMeal = new Meals({
    title: data.title,
    slug: data.slug,
    image_public_id: data.image_public_id,
    creator: data.creator,
    creator_email: data.creator_email,
    summary: data.summary,
    instructions: data.instructions,
  });
  try {
    const response = await createdMeal.save();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, data: error });
  }
  //   return NextResponse.json({ success: true });
}
