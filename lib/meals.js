import mongoose from "mongoose";

export async function dbConnect() {
  await mongoose.connect(
    "mongodb+srv://krishkoria2004:MyDBPassword%4012345@foodhub.qi70ozu.mongodb.net/?retryWrites=true&w=majority&appName=FoodHub"
  );
}

export default async function getMeals() {
  await dbConnect();
  const meals = await fetch("http://localhost:3000/api/meals", { cache: 'no-store' });
  const mealsData = await meals.json();
return mealsData.data;
}
