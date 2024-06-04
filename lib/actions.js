"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const res = await saveMeal(formData);

  if (res.success) {
    redirect("/meals");
  }
}
