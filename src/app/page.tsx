"use client";
import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Componetns/Slider";
import data from "@/app/api/data.json";
import BranchSection from "./Componetns/BranchSection";
import ProductSection from "./Componetns/ProductSection";
import Service from "./Componetns/Service";
import Record from "./Componetns/Record";

const Home: React.FC = () => {
  const [product] = useState(data.golas);
  const [franchises] = useState(data.locations);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js"); // Bootstrap JS with Popper.js
  }, []);

  return (
    <>
      {/* Hero section */}
      <section className="hero_section">
        <Slider />
      </section>
      {/* card section */}
      <ProductSection product={product} limit={6} ViewMorebtn={true} />

      {/* branch section */}
      <BranchSection franchises={franchises} limit={4} ViewMorebtn={true} />

      {/* record section */}
      <Record />

      {/* service section */}
      <Service />
    </>
  );
};

export default Home;
