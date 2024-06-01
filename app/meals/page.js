import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import getMeals from "@/lib/meals";
export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={styles.highlight}>By You</span>
        </h1>
        <p>Choose Your Recipe and Cook it Yourself, Its Easy and Fun</p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>
            Share your Favorite Recipe with the World
          </Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
