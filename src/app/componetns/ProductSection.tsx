"use client";
import React from "react";
import { gola } from "../Helper/types";
import ProductCards from "../Helper/Product_card";
import Link from "next/link";

interface ProductProps {
  product: gola[];
  limit?: number;
  ViewMorebtn: boolean;
}

const ProductSection: React.FC<ProductProps> = ({
  product,
  limit,
  ViewMorebtn,
}) => {
  return (
    <>
      <section className="card_section unipadding position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title text-white d-flex align-items-center justify-content-center pb-5">
                <h2 className="title fs-1 fw-bold d-inline-block">
                  Our Product
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {product.slice(0, limit ?? product.length).map((elem, index) => {
              return <ProductCards key={index} Mydata={elem} />;
            })}
            {ViewMorebtn && (
              <div className="col-md-12 text-center mt-5 ">
                <Link href={"/Product"}>
                  <button className="newbtn">More Product</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
