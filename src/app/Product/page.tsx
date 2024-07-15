"use client";
import React, { useState } from "react";
import data from "@/app/api/data.json";
import ProductSection from "@/app/Componetns/ProductSection";
const Page = () => {
  const [product] = useState(data.golas);
  return (
    <>
      <ProductSection product={product} ViewMorebtn={false} additionalClassName="comman_Section product_page"/>
    </>
  );
};

export default Page;
