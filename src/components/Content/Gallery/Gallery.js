import React from "react";
import ImageGallery from "react-image-gallery";
import { GalleryContainer } from "../ContentElements";
import "./gallery.css";
import img1 from "../../../images/image-product-1.jpg";
import img2 from "../../../images/image-product-2.jpg";
import img3 from "../../../images/image-product-3.jpg";
import img4 from "../../../images/image-product-4.jpg";
import img1thumbnail from "../../../images/image-product-1-thumbnail.jpg";
import img2thumbnail from "../../../images/image-product-2-thumbnail.jpg";
import img3thumbnail from "../../../images/image-product-3-thumbnail.jpg";
import img4thumbnail from "../../../images/image-product-4-thumbnail.jpg";
import { useWindowSize } from "@react-hook/window-size/throttled";

const images = [
  {
    original: img1,
    thumbnail: img1thumbnail,
  },
  {
    original: img2,
    thumbnail: img2thumbnail,
  },
  {
    original: img3,
    thumbnail: img3thumbnail,
  },
  {
    original: img4,
    thumbnail: img4thumbnail,
  },
];

const Gallery = () => {
  const [width, height] = useWindowSize();

  return (
    <GalleryContainer>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={width > 600 ? false : true}
        showThumbnails={width > 600 ? true : false}
      />
    </GalleryContainer>
  );
};

export default Gallery;
