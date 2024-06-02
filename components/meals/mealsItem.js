import Link from "next/link";

import styles from "./mealsItems.module.css";
import ImageProvider from "../imageprovider/imageProvider";

export default function MealItem({
  title,
  slug,
  image_public_id,
  summary,
  creator,
}) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <ImageProvider src={image_public_id} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
