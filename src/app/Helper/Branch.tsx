import { NavBtn, ContactBtn, Location } from "@/app/Helper/types";
import Link from "next/link";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";

interface LocationCardProps {
  location: Location;
}
const Branch: React.FC<LocationCardProps> = ({ location }) => {
  const { img, title, desc, navbtn, contactbtn } = location;
  return (
    <>
      <div className="card h-100">
        <div className="top_img mx-auto">
          <Image
            src={img}
            layout="responsive"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt={`${title}-image`}
            className="card-img-top img-fluid"
          />
        </div>
        <div className="card-body text-white text-center">
          <h3 className="card-title fs-5 fw-bold text-center">
            <LocationOnIcon />
            {title}
          </h3>
          <p className="card-text">{desc}</p>
        </div>
        <div className="card_btn d-flex flex-wrap align-items-center justify-content-between">
          <Link
            href={navbtn.map}
            target="_blank"
            className="btn full_btn fs-6 p-2 mt-2 position-relative rounded-3 overflow-hidden text-white"
          >
            {navbtn.Nbtn}
          </Link>
          <Link
            href={`tel:${contactbtn.FirstNumber}`}
            target="_blank"
            className={`btn fs-6 p-2 mt-2 position-relative rounded-3 overflow-hidden text-white ${contactbtn.isbtnTwo == false ? "full_btn" : "half_btn"}`}
          >
            {contactbtn.Cbtn}
          </Link>
          <Link
            href={`tel:${contactbtn.SecondNumber}`}
            target="_blank"
            className={`btn fs-6 p-2 mt-2 position-relative rounded-3 overflow-hidden text-white ${contactbtn.isbtnTwo == true ? "half_btn" : "d-none"}`}
          >
            {contactbtn.Cbtn}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Branch;
