import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/animations.module.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  function navbarToggle() {
    setNavbar((display) => !display);
  }

  return (
    <>
      <header
        className={`sticky top-0 p-5 flex flex-col md:flex-row md:justify-between gap-5 bg-[#f85606] text-white`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/images/logo-icon.svg"
              alt="Pokeball"
              height={28}
              width={28}
            />
            <h2 className="font-semibold text-2xl">Online Store</h2>
          </Link>
          <Image
            className="md:hidden"
            onClick={navbarToggle}
            src={navbar ? "/images/x.svg" : "/images/hamburger.svg"}
            height={24}
            width={24}
            alt="Menu"
          />
        </div>

        <nav
          className={`${!navbar && "hidden"}  ${
            styles.slideInTop
          } md:!animate-none md:block`}
        >
          <ul className="md:flex md:items-center">
            <li className="pb-5 md:pb-0 mr-10 ">
              <Link
                href="/"
                className=" hover:!text-black transition-all duration-300"
              >
                Browse Categories
              </Link>
            </li>
            <li className="pb-5 md:pb-0 mr-10 ">
              <Link
                href="/"
                className=" hover:!text-black transition-all duration-300"
              >
                Customer care
              </Link>
            </li>
            <li className="pb-5 md:pb-0 mr-10 transition-all">
              <Link href="https://www.instagram.com/vivekingin0/">
                <button className="rounded border-2 border-white hover:bg-white hover:text-black transition-all duration-300 px-4 py-1">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
