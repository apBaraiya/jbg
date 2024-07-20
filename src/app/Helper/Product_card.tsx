import React from "react";
import { gola } from "./types";
import Image from "next/image";

interface ProductCardProps {
  Mydata: gola;
}
const ProductCards: React.FC<ProductCardProps> = ({ Mydata }) => {
  const { gola_img, gola_name } = Mydata;
  return (
    <div className="col-lg-4 col-md-4">
      <div className="card_box position-relative overflow-hidden">
        <div className="card_img hover-zoom hover-overlay">
          <Image
            src={gola_img}
            layout="responsive"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt={gola_name}
            className="img-fluid w-100"
          />
          {/* <img src={gola_img} className="img-fluid w-100" alt={gola_name} /> */}
          <div
            className="mask"
            style={{ backgroundColor: "hsla(0,0%,0%,0.6)" }}
          ></div>
        </div>
        <div className="card_content text-center d-inline-block text-white position-absolute top-0 start-50 opacity-0 translate-middle z-3">
          <h4 className="fs-4 fw-bold text-white text-capitalize">
            {gola_name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
