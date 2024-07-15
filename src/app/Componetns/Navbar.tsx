"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Use useRef to create references to DOM elements
  const menuIconRef = useRef<HTMLLIElement>(null);
  const navbarRef = useRef<HTMLUListElement>(null);

  // Use useState for toggling classes
  const [isActive, setIsActive] = useState(false);

  // Handle click event
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("header");
      if (document.documentElement.scrollTop > 20) {
        nav?.classList.add("sticky");
      } else {
        nav?.classList.remove("sticky");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <header className="header position-fixed top-0 start-0 w-100 d-flex justify-content-between align-content-center">
        <Link href="/" className="navbar-brand">
          <Image src="/img/jbg.png" width={100} height={100} alt="logo" className="img-fluid" />
        </Link>
        <i className={`fa-solid fa-bars-staggered ${isActive ? "fs-x" : ""}`} id="menu-icon" ref={menuIconRef} onClick={handleClick}></i>
        <ul className={`list-unstyled m-0 navbar_nav align-items-center justify-content-center ${isActive ? "active" : ""}`} ref={navbarRef}>
          <li>
            <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`} onClick={closeNavbar} aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className={`nav-link ${pathname === "/About" ? "active" : ""}`} onClick={closeNavbar}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/Product" className={`nav-link ${pathname === "/Product" ? "active" : ""}`} onClick={closeNavbar}>
              Our Product
            </Link>
          </li>
          <li>
            <Link href="/Franchise" className={`nav-link ${pathname === "/Franchise" ? "active" : ""}`} onClick={closeNavbar}>
              Our Franchise
            </Link>
          </li>
          <li>
            <Link href="/Record" className={`nav-link ${pathname === "/Record" ? "active" : ""}`} onClick={closeNavbar}>
              Record
            </Link>
          </li>
          <li>
            <Link href="/Video" className={`nav-link ${pathname === "/Video" ? "active" : ""}`} onClick={closeNavbar}>
              Video
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
