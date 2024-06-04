import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

const mealSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  image_public_id: { type: String, required: true },
  summary: { type: String, required: true },
  instructions: { type: String, required: true },
  creator: { type: String, required: true },
  creator_email: { type: String, required: true },
});

mealSchema.plugin(UniqueValidator);
export const Meals =
  mongoose.models.Meals || mongoose.model("Meals", mealSchema);
