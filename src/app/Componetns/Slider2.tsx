"use client";
// import { initializeCarousel } from '../Helper/Slider_script';
import "bootstrap/dist/css/bootstrap.min.css";
// components/SwiperSlider.tsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Thumbs, Autoplay]);

const SwiperSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <section className="hero_section position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="hero_content position-relative h-100 w-10">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              thumbs={{ swiper: thumbsSwiper }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper2">
              <SwiperSlide>
                <img src="/img/slider_img/gola-img1.png" className="img-fluid d-block m-auto" alt="gola-img1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slider_img/gola-img2.png" className="img-fluid d-block m-auto" alt="gola-img2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slider_img/gola-img3.png" className="img-fluid d-block m-auto" alt="gola-img3" />
              </SwiperSlide>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              breakpoints={{
                641: {
                  direction: "vertical",
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper position-absolute d-inline-block">
              <SwiperSlide>
                <img src="/img/slider_img/gola-img1.png" className="img-fluid d-block m-auto" alt="gola-img1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slider_img/gola-img2.png" className="img-fluid d-block m-auto" alt="gola-img2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slider_img/gola-img3.png" className="img-fluid d-block m-auto" alt="gola-img3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwiperSlider;
