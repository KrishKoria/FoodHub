"use client";

import ImagePicker from "@/components/images/imagePicker";
import styles from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import { useState } from "react";
import MealsFormSubmit from "@/components/meals/mealsSubmitHandlers";
import { Alert, AlertTitle } from "@mui/material";

export default function ShareMealPage() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (imageInfo) => {
    setUploadedImage(imageInfo);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (uploadedImage) {
      formData.append("image_public_id", uploadedImage.public_id);
    } else {
      setError("Please upload an image.");
      return;
    }
    const res = await shareMeal(formData);
    if (!res.success) {
      setError(res.message);
    } else {
      setError(null);
      // Handle successful submission (e.g., navigate to a success page or reset form)
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="creator" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="creator_email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker onImageUpload={handleImageUpload} />
          {error && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
          <p className={styles.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
