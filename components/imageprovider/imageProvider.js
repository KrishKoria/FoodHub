"use client";

import { CldImage } from "next-cloudinary";

export default function ImageProvider({ src, alt }) {
  return <CldImage src={src} alt={alt} fill />;
}
