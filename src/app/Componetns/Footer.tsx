import Image from "next/image";
import Link from "next/link";
import React from "react";

const footer = () => {
  return (
    <section className="footer_section unipadding pb-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="log">
              <Link href={"/"}>
                <Image src="/img/logojbg.png" layout="responsive" width={0} height={0} style={{ width: "100%", height: "100%" }} alt="footer-logo" className="img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <div className="footer_middle">
              <h2 className="fs-4 fw-bold text-uppercase title mb-4">Links</h2>
              <ul className="p-0 m-0">
                <li className="pb-1">
                  <Link href={"/"} className="position-relative d-inline-block fs-6">
                    Home
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href={"/About"} className="position-relative d-inline-block fs-6">
                    About Us
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href={"/Product"} className="position-relative d-inline-block fs-6">
                    Our Product
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href={"/Franchise"} className="position-relative d-inline-block fs-6">
                    Our Franchise
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href={"/Record"} className="position-relative d-inline-block fs-6">
                    Record
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href={"/Video"} className="position-relative d-inline-block fs-6">
                    Video
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <div className="social_link">
              <h2 className="fs-4 fw-bold text-uppercase title mb-4">FOLLOW US</h2>
              <ul className="p-0 m-0 d-flex gap-2">
                <li>
                  <Link href={"https://www.facebook.com/JayBhavaniDryFruitDishGola/"} target="_blank" aria-label="Facebook" className="facebook_icon d-inline-block py-1 me-1 rounded-3 text-center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href={"https://x.com/bhavani_gola?s=08"} target="_blank" aria-label="Twitter" className="twitter_icon d-inline-block py-1 me-1 rounded-3 text-center">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.instagram.com/jay_bhavani_dryfruit_dish_gola/"} aria-label="Instagram" target="_blank" className="insta_icon d-inline-block py-1 rounded-3 text-center">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact_info">
              <h2 className="fs-4 fw-bold text-uppercase title mb-4">Contact Us</h2>
              <ul className="p-0 m-0">
                <li className="pb-2">
                  <Link href={"https://maps.app.goo.gl/nzyGMoGqFng3sR3B9"} target="_blank" className="d-flex gap-2">
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <p className="fs-6 fw-normal text-white mb-0">Shop No. 7/8, Shiv Ashish Complex, Opp. Mahila College, Above Under Bridge, Kalawad Road, Rajkot, Gujarat - 360005.</p>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href={"tel:97274 74574"} className="d-flex gap-2">
                    <span>
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <p className="fs-6 fw-normal text-white mb-0">+91 97274 74574</p>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href={"mailto:jaybhavanienterprise2002@gmail.com"} className="d-flex gap-2">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <p className="fs-6 fw-normal text-white mb-0 email">jaybhavanienterprise2002@gmail.com</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
