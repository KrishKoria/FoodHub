import Link from "next/link";
import styles from "./page.module.css";
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
      <main className={styles.main}></main>
    </>
  );
}
