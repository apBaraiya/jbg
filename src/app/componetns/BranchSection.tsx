"use client";
import React from "react";
import Branch from "../Helper/Branch";
import { NavBtn, ContactBtn, Location } from "@/app/Helper/types";
import Link from "next/link";

interface BranchSectionProps {
  franchises: Location[];
  limit?: number;
  ViewMorebtn: boolean;
}

const BranchSection: React.FC<BranchSectionProps> = ({franchises,limit,ViewMorebtn,}) => {
  return (
    <>
      <section className="branch_section comman_Section unipadding position-relative mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title text-white d-flex align-items-center justify-content-center pb-5">
                <h2 className="title fs-1 fw-bold d-inline-block">
                  Our Branch
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {franchises
              .slice(0, limit ?? franchises.length)
              .map((elem, index) => {
                const columnClass =
                  index === 0
                    ? "col-lg-12 col-md-6 main_branch"
                    : "col-lg-4 col-md-4";
                return (
                  <div key={index} className={columnClass}>
                    <Branch location={elem} />
                  </div>
                );
              })}
            {ViewMorebtn && (
              <div className="col-md-12 text-center mt-5 ">
                <Link href={"/franchise"}><button className="newbtn">More Branch</button></Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BranchSection;
