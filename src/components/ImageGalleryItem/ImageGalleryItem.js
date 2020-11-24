import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li data-attribute="SRL" id={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        data-index={largeImageURL}
      />
    </li>
  );
}
