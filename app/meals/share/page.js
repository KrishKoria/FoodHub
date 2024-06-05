"use client";

import ImagePicker from "@/components/images/imagePicker";
import styles from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import { useState } from "react";
import MealsFormSubmit from "@/components/meals/mealsSubmitHandlers";
import { Alert, AlertTitle, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

export default function ShareMealPage() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const router = useRouter();

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
      setOpenAlert(true);
      return;
    }
    const res = await shareMeal(formData);
    if (!res.success) {
      setError(res.message);
      setOpenAlert(true);
    } else {
      setError(null);
      router.push("/meals");
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
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
          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handleCloseAlert}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          </Snackbar>
          <p className={styles.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
