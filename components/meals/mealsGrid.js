import styles from "./mealsGrid.module.css";
import MealItem from "./mealsItem";
export default async function MealsGrid({ meals }) {
 
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal._id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
