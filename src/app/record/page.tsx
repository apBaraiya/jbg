"use client";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Record = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { original: "./img/Records/celebrity_1.jpg" },
    { original: "./img/Records/celebrity_2.jpg" },
    { original: "./img/Records/celebrity_3.jpg" },
    { original: "./img/Records/celebrity_4.jpg" },
    { original: "./img/Records/celebrity_6.jpg" },
    { original: "./img/Records/celebrity_8.jpg" },
    { original: "./img/Records/celebrity_9.jpg" },
    { original: "./img/Records/certificate.jpg" },
    { original: "./img/Records/klal_1.jpg" },
    { original: "./img/Records/klal_2.jpg" },
    { original: "./img/Records/klal_3.jpg" },
    { original: "./img/Records/klal_4.jpg" },
    { original: "./img/Records/limca_1.jpg" },
    { original: "./img/Records/limca_2.jpg" },
    { original: "./img/Records/limca_3.jpg" },
    { original: "./img/Records/limca_4.jpg" },
    { original: "./img/Records/limca_5.jpg" },
    { original: "./img/Records/limca_6.jpg" },
    { original: "./img/Records/limca_7.jpg" },
    { original: "./img/Records/limca_8.jpg" },
    { original: "./img/Records/limca_9.jpg" },
    { original: "./img/Records/limca_10.jpg" },
    { original: "./img/Records/limca_11.jpg" },
    { original: "./img/Records/limca_12.jpg" },
    { original: "./img/Records/limca_13.jpg" },
    { original: "./img/Records/limca_14.jpg" },
    { original: "./img/Records/limca_15.jpg" },
    { original: "./img/Records/limca_16.jpg" },
    { original: "./img/Records/limca_17.jpg" },
    { original: "./img/Records/limca_18.jpg" },
    { original: "./img/Records/redfm_1.jpg" },
    { original: "./img/Records/redfm_2.jpg" },
    { original: "./img/Records/redfm_3.jpg" },
    { original: "./img/Records/redfm_4.jpg" },
    { original: "./img/Records/redfm_5.jpg" },
    { original: "./img/Records/redfm_6.jpg" },
    { original: "./img/Records/redfm_7.jpg" },
    { original: "./img/Records/redfm_8.jpg" },
    { original: "./img/Records/redfm_9.jpg" },
    { original: "./img/Records/redfm_10.jpg" },
    { original: "./img/Records/redfm_11.jpg" },
    { original: "./img/Records/redfm_12.jpg" },
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
      <section className="record_section unipadding">
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
                    <img
                      src={image.original}
                      className="img-fluid d-inline-block w-100 h-100"
                      alt={`Record ${index + 1}`}
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
