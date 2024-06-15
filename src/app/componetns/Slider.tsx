/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect } from 'react';
import { initializeCarousel } from '../Helper/Slider_script';
import { KeyboardArrowLeft } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Slider = () => {
  useEffect(() => {
    initializeCarousel();
  }, []);
  return (
    <>
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src="/img/slider_img/slider_img1.webp" alt="slider_img1" className="img-fluid larg_img" />
            <img src="/img/slider_img/res/jbg1.webp" alt="responsiveimg" className="img-fluid small_img" />
            <div className="content">
              <div className="title">
                <h1>
                  100% <br /> Quality Products
                </h1>
              </div>
              <div className="topic">
                <h3>100% Quality Taste</h3>
              </div>
              <div className="buttons">
                <button>Our Product</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img/slider_img/slider_img2.webp" className="img-fluid larg_img" alt="slider_img2" />
            <img src="/img/slider_img/res/jbg2.webp" alt="responsiveimg" className="img-fluid small_img" />
            <div className="content">
              <div className="title">
                <h2>
                  Our <br /> Dryfruit Gola
                </h2>
              </div>
              <div className="topic">
                <h3>KRACKJACK GOLA</h3>
              </div>
              <div className="buttons">
                <button>Our Product</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img/slider_img/slider_img3.webp" className="img-fluid larg_img" alt="slider_img3" />
            <img src="/img/slider_img/res/jbg3.webp" alt="responsiveimg" className="img-fluid small_img" />
            <div className="content">
              <div className="title">
                <h2>
                  Our <br /> Mava Malai Gola
                </h2>
              </div>
              <div className="topic">
                <h3>CHOCOBAR GOLA</h3>
              </div>
              <div className="buttons">
                <button>Our Product</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img/slider_img/slider_img4.webp" className="img-fluid larg_img" alt="slider_img4" />
            <img src="/img/slider_img/res/jbg4.webp" alt="responsiveimg" className="img-fluid small_img" />
            <div className="content">
              <div className="title">
                <h2>
                  Our <br /> Plain Gola
                </h2>
              </div>
              <div className="topic">
                <h3>TIRANGA GOLA</h3>
              </div>
              <div className="buttons">
                <button>Our Product</button>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail">
          <div className="item">
            <img src="/img/slider_img/thumbnail-3.webp" className="img-fluid" alt="slider_thumbnail_img3" />
          </div>
          <div className="item">
            <img src="/img/slider_img/thumbnail-1.webp" className="img-fluid" alt="slider_thumbnail_img1" />
          </div>
          <div className="item">
            <img src="/img/slider_img/thumbnail-4.webp" className="img-fluid" alt="slider_thumbnail_img4" />
          </div>
          <div className="item">
            <img src="/img/slider_img/thumbnail-2.webp" className="img-fluid" alt="slider_thumbnail_img2" />
          </div>
        </div>

        <div className="arrows">
          <button id="prev">
            <KeyboardArrowLeft />
          </button>
          <button id="next">
            <ChevronRightIcon />
          </button>
        </div>
        <div className="time"></div>
      </div>
    </>
  );
};

export default Slider;
