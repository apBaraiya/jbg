"use client";
import React, { useState } from "react";
import data from "@/app/api/data.json";
import ProductSection from "@/app/Componetns/ProductSection";
const page = () => {
  const [product] = useState(data.golas);
  return (
    <>
      <ProductSection product={product} ViewMorebtn={false}/>
    </>
  );
};

export default page;
