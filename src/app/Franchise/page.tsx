"use client";
import React, { useState } from "react";
import data from "@/app/api/data.json";
import BranchSection from '@/app/Componetns/BranchSection';

const ProductPage = () => {
  const [franchises] = useState(data.locations);
  return (
    <>
      <BranchSection  franchises={franchises} ViewMorebtn={false} />
    </>
  );
};

export default ProductPage;
