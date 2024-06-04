import mongoose from "mongoose";
import slugify from "slugify";
import xss from "xss";
export const dynamic = "force-dynamic";
export const revalidate = 1;
export async function dbConnect() {
  await mongoose.connect(process.env.MONGODB_URI);
}

export default async function getMeals() {
  const meals = await fetch(`${process.env.WEB_URI}/api/meals`, {
    cache: "no-store",
  });
  const mealsData = await meals.json();
  return mealsData.data;
}

export async function getMeal(slug) {
  const meal = await fetch(`${process.env.WEB_URI}/api/meals/${slug}`, {
    next: { revalidate: 30 },
    method: "GET",
  });
  const mealData = await meal.json();
  return mealData.data;
}

export async function saveMeal(mealData) {
  mealData.append("slug", slugify(xss(mealData.get("title"))));
  mealData.set("instructions", xss(mealData.get("instructions")));
  const object = {};
  mealData.forEach((value, key) => (object[key] = value));
  const response = await fetch(`${process.env.WEB_URI}/api/meals/share`, {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return response.json();
}
