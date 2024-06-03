import { dbConnect } from "@/lib/meals";
import { Meals } from "@/models/Models";
import { NextResponse } from "next/server";
export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  console.log("Data:", data);
  let existingUser;
  try {
    existingUser = await Meals.findOne({ email: data.email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return NextResponse.json({ success: false, error: "User already exists" });
  }
  const createdMeal = new Meals({
    title: data.title,
    slug: data.slug,
    image_public_id: data.image_public_id,
    creator: data.creator,
    creator_email: data.creator_email,
    summary: data.summary,
    instructions: data.instructions,
  });
  console.log("Created Meal:", createdMeal);
  try {
    const response = await createdMeal.save();
    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json({ success: false, data: error });
  }
  //   return NextResponse.json({ success: true });
}
