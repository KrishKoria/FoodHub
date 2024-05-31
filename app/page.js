import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/images/imageSlideshow";
export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Prime Spot for all Foodies</h1>
            <p>See food from all over the world.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join The Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            FoodHub is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            FoodHub is a place to discover new dishes, and to connect with other
            food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why FoodHub?</h2>
          <p>
            FoodHub is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            FoodHub is a place to discover new dishes, and to connect with other
            food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
