import mongoose from "mongoose";

export async function dbConnect() {
  await mongoose.connect(process.env.MONGODB_URI);
}

export default async function getMeals() {
  await dbConnect();
  const meals = await fetch(`${process.env.WEB_URI}/api/meals`, {
    next: { revalidate: 30 },
  });
  const mealsData = await meals.json();
  return mealsData.data;
}

export async function getMeal(slug) {
  await dbConnect();
  const meal = await fetch(`${process.env.WEB_URI}/api/meals/${slug}`, {
    next: { revalidate: 30 },
    method: "GET",
  });
  const mealData = await meal.json();
  return mealData.data;
}
