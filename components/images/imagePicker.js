"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import styles from "./imagePicker.module.css";
export default function ImagePicker({ onImageUpload }) {
  const [resource, setResource] = useState();
  const handleSuccess = (result, { widget }) => {
    setResource(result?.info);
    onImageUpload(result?.info);
    widget.close();
  };
  return (
    <div className={styles.picker}>
      <div className={styles.controls}>
        <CldUploadButton
          className={styles.button}
          type="button"
          uploadPreset="myuploadpreset"
          onSuccess={handleSuccess}
        >
          Pick an image
        </CldUploadButton>
        {!resource && (
          <div className={styles.preview}>
            <p>No image selected</p>
          </div>
        )}
        {resource && (
          <div className={styles.preview}>
            <CldImage src={resource.public_id} alt={resource.public_id} fill />
          </div>
        )}
      </div>
    </div>
  );
}
