"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(formData) {
  if (
    isInvalidText(formData.get("creator")) ||
    isInvalidText(formData.get("title")) ||
    isInvalidText(formData.get("summary")) ||
    isInvalidText(formData.get("instructions")) ||
    isInvalidText(formData.get("image_public_id")) ||
    isInvalidText(formData.get("creator_email")) ||
    !formData.get("creator_email").includes("@")
  ) {
    throw new Error("Invalid Inputs, please check your form.");
  }

  const res = await saveMeal(formData);

  if (res.success) {
    redirect("/meals");
  }
}
