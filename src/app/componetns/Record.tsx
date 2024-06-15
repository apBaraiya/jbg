import Image from "next/image";
import Link from "next/link";
import React from "react";

const Record = () => {
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
              <div className="record_box d-flex align-items-center justify-content-center gap-4">
                <div className="hexagon overflow-hidden p-1 d-md-block d-none hover-zoom">
                  <Image
                    src="/img/Records/limca_1.webp"
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    alt="limca_1-img"
                    className="img-fluid d-inline-block w-100 h-100"
                  />
                </div>
                <div className="hexagon overflow-hidden p-1 d-md-block d-none hover-zoom">
                  <Image
                    src="/img/Records/limca_3.webp"
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    alt="limca_3-img"
                    className="img-fluid d-inline-block w-100 h-100"
                  />
                </div>
                <div className="hexagon overflow-hidden p-1 hover-zoom">
                  <Image
                    src="/img/Records/limca_10.webp"
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    alt="limca_10-img"
                    className="img-fluid d-inline-block w-100 h-100"
                  />
                </div>
              </div>
              <div className="record_box d-flex align-items-center justify-content-center gap-4">
                <div className="hexagon overflow-hidden p-1 hover-zoom">
                  <Image
                    src="/img/Records/redfm_1.webp"
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    alt="redfm_1-img"
                    className="img-fluid d-inline-block w-100 h-100"
                  />
                </div>
                <div className="hexagon overflow-hidden p-1 hover-zoom">
                  <Image
                    src="/img/Records/redfm_4.webp"
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    alt="redfm_4-img"
                    className="img-fluid d-inline-block w-100 h-100"
                  />
                </div>
              </div>
              <div className="record_box d-flex align-items-center justify-content-center gap-4">
                <div className="hexagon overflow-hidden p-1 hover-zoom">
                  <Image
                    src="/img/Records/certificate.webp"
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    alt="certificate-img"
                    className="img-fluid d-inline-block w-100 h-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <Link href={"/Record"}>
                <button className="newbtn">View More Record</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Record;
