import React from "react";

const page = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <section className="breadcrumbs">
        <img
          src="./img/About/i_love_jbg.gif"
          className="img-fluid hidden-mobile"
          alt="i_love_jbg"
        />
        <img
          src="./img/About/adi 4.jpg"
          className="img-fluid visible-mobile"
          alt="samll_i_love_jbg"
        />
      </section>
      <section className="about_page pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title text-white d-flex align-items-center justify-content-center pb-5">
                <h2 className="title fs-1 fw-bold d-inline-block">
                  About Us
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="open-book bg-white text-dark position-relative p-4">
                <div className="left_content px-4">
                  <div className="custome_bg">
                    <h2 className="chapter-title mb-3 position-relative text-center text-uppercase">
                      Mission
                    </h2>
                  </div>
                  <p className="fs-6">
                    We are known for best quality gola serve in rajkot like
                    Cadbury, Butterscotch,Choco Ball,Ferrero Rocher Gola,Brownie
                    Gola and many more other Flavours.
                  </p>
                  <p className="fs-6">
                    We are giving best gola service since 1990. We are Using RO
                    water ice. Our Gola can be sent on Flight Through Hand
                    Luggage.
                  </p>
                  <p className="fs-6">
                    We have Franchises in Morbi, Ahmedabad, and Surat. We have
                    used natural and ISI Marked Colour.
                  </p>
                </div>
                <div className="right_content px-4">
                  <div className="custome_bg">
                    <h2 className="chapter-title mb-3 position-relative text-center text-uppercase">
                      Vision
                    </h2>
                  </div>
                  <p className="fs-6">
                    Our Vision is to give best quality to customer and best
                    satisfaction of customer. Our goal is to serve best Gola
                    across the India by way of franchise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
