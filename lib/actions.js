"use server";
import slugify from "slugify";
import xss from "xss";
export async function shareMeal(formData) {
  saveMeal(formData);
}
async function saveMeal(mealData) {
  mealData.append("slug", slugify(xss(mealData.get("title"))));
  mealData.set("instructions", xss(mealData.get("instructions")));
  const object = {};
  mealData.forEach((value, key) => (object[key] = value));
  const reponse = await fetch(`${process.env.WEB_URI}/api/meals/share`, {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  //   console.log("Response:", reponse);
}
