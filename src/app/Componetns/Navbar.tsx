"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

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
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image
                src="/img/jbg.png"
                width={100}
                height={100}
                alt="logo"
                className="img-fluid"
              />
            </Link>
            <button
              className="navbar-toggler shadow-none bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse position-relative"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 list-unstyled mb-lg-0">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/About"
                    className={`nav-link ${
                      pathname === "/About" ? "active" : ""
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/Product"
                    className={`nav-link ${
                      pathname === "/Product" ? "active" : ""
                    }`}
                  >
                    Our Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/Franchise"
                    className={`nav-link ${
                      pathname === "/Franchise" ? "active" : ""
                    }`}
                  >
                    Our Franchise
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/Record"
                    className={`nav-link ${
                      pathname === "/Record" ? "active" : ""
                    }`}
                  >
                    Record
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/Video"
                    className={`nav-link ${
                      pathname === "/Video" ? "active" : ""
                    }`}
                  >
                    Video
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
