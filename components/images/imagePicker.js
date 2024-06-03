"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import styles from "./imagePicker.module.css";
export default function ImagePicker() {
  const [resource, setResource] = useState();
  return (
    <div className={styles.picker}>
      <div className={styles.controls}>
        <CldUploadButton
          className={styles.button}
          type="button"
          uploadPreset="myuploadpreset"
          onSuccess={(result, { widget }) => {
            setResource(result?.info);
            widget.close();
          }}
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
