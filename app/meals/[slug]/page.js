import ImageProvider from "@/components/imageprovider/imageProvider";
import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
export default async function MealsSlugPage({ params }) {
  const meal = await getMeal(params.slug);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <ImageProvider src={meal.image_public_id} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br>"),
          }}
        ></p>
      </main>
    </>
  );
}
