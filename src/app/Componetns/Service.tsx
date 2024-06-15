import React from 'react';

const Service = () => {
  return (
    <>
      {/* service section  */}
      <section className="service_section comman_Section position-relative unipadding">
        <div className="container wrapper position-relative d-block mx-auto my-0 w-100">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title text-white d-flex align-items-center justify-content-center pb-5">
                <h2 className="title fs-1 fw-bold d-inline-block">Our Service</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-lg-6 col-md-6">
              <div className="box p-4 pe-0 position-relative">
                <div className="service_right bg-white rounded-4 position-relative d-flex align-items-center justify-content-center flex-wrap text-center p-3">
                  <div className="images">
                    <span>
                      <i className="fa-solid fa-rocket"></i>
                    </span>
                  </div>
                  <div className="content">
                    <p className="fs-6 fw-normal mb-0">We have set a world record of making 12 Golas in 60 seconds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="box2 p-4 ps-0 position-relative">
                <div className="service_left bg-white rounded-4 position-relative d-flex align-items-center justify-content-center flex-wrap text-center p-3">
                  <div className="images">
                    <span>
                      <i className="fa-solid fa-plane"></i>
                    </span>
                  </div>
                  <div className="content">
                    <p className="fs-6 fw-normal mb-0">Our Frozen Gola can last upto 4 hours and can be sent through flight by hand luggage.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
