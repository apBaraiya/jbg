"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Record = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { original: "/img/Records/celebrity_1.webp" },
    { original: "/img/Records/celebrity_2.webp" },
    { original: "/img/Records/celebrity_3.webp" },
    { original: "/img/Records/celebrity_4.webp" },
    { original: "/img/Records/celebrity_6.webp" },
    { original: "/img/Records/celebrity_8.webp" },
    { original: "/img/Records/celebrity_9.webp" },
    { original: "/img/Records/certificate.webp" },
    { original: "/img/Records/klal_1.webp" },
    { original: "/img/Records/klal_2.webp" },
    { original: "/img/Records/klal_3.webp" },
    { original: "/img/Records/klal_4.webp" },
    { original: "/img/Records/limca_1.webp" },
    { original: "/img/Records/limca_2.webp" },
    { original: "/img/Records/limca_3.webp" },
    { original: "/img/Records/limca_4.webp" },
    { original: "/img/Records/limca_5.webp" },
    { original: "/img/Records/limca_6.webp" },
    { original: "/img/Records/limca_7.webp" },
    { original: "/img/Records/limca_8.webp" },
    { original: "/img/Records/limca_9.webp" },
    { original: "/img/Records/limca_10.webp" },
    { original: "/img/Records/limca_11.webp" },
    { original: "/img/Records/limca_12.webp" },
    { original: "/img/Records/limca_13.webp" },
    { original: "/img/Records/limca_14.webp" },
    { original: "/img/Records/limca_15.webp" },
    { original: "/img/Records/limca_16.webp" },
    { original: "/img/Records/limca_17.webp" },
    { original: "/img/Records/limca_18.webp" },
    { original: "/img/Records/redfm_1.webp" },
    { original: "/img/Records/redfm_2.webp" },
    { original: "/img/Records/redfm_3.webp" },
    { original: "/img/Records/redfm_4.webp" },
    { original: "/img/Records/redfm_5.webp" },
    { original: "/img/Records/redfm_6.webp" },
    { original: "/img/Records/redfm_7.webp" },
    { original: "/img/Records/redfm_8.webp" },
    { original: "/img/Records/redfm_9.webp" },
    { original: "/img/Records/redfm_10.webp" },
    { original: "/img/Records/redfm_11.webp" },
    { original: "/img/Records/redfm_12.webp" },
  ];

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <>
      <section className="record_section record_page comman_Section unipadding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title text-white d-flex align-items-center justify-content-center pb-5">
                <h2 className="title fs-1 fw-bold d-inline-block">
                  Our Record
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="record_box d-flex flex-wrap align-items-center justify-content-center gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="hexagon small_hexagon overflow-hidden p-1 hover-zoom"
                    onClick={() => openGallery(index)}
                  >
                    <Image
                      src={image.original}
                      layout="responsive"
                      width={0}
                      height={0}
                      style={{ width: "100%", height: "100%" }}
                      alt={`Record ${index + 1}`}
                      className="img-fluid d-inline-block w-100 h-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {showGallery && (
        <div className="gallery_overlay">
          <button className="close_gallery" onClick={closeGallery}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ImageGallery items={images} startIndex={currentIndex} />
        </div>
      )}
    </>
  );
};

export default Record;
