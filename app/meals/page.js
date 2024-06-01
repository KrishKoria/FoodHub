import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import getMeals from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
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
        <Suspense fallback={<p className={styles.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
