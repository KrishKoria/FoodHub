"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const res = await saveMeal(formData);
  console.log("Response:", res);
  if (res.success) {
    redirect("/meals");
  }
}
