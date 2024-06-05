"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Button from "./Button";
import { BiUser } from "react-icons/bi";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active
          ? "bg-[rgba(165,165,165,0.5)] shadow-lg py-2 z-50"
          : "bg-[#faf5f5] py-1 z-50"
      } fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200`}
    >
      <div className=" max_padd_container flex justify-between items-center">
        {/* {logo} */}

        <Link href={"/"} className="flexCenter py-0">
          <img
            src={"../image/file.png"}
            alt="Logo"
            height={99}
            width={133}
          ></img>
        </Link>
        <Nav
          containerStyles={"hidden lg:flex gap-x-10 items-start justify-center"}
          linkStyles={"capitalize cursor-pointer my-4 relative transition-all"}
        />
        {/*for mobile*/}

        <Nav
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col justify-center fixed top-20 p-12 z-10 bg-white rounded-lg transition-all duration-500 shadow-md right-0 w-60 mt-[100px] "
              : "flex items-start flex-col justify-center fixed top-20 p-12 z-10 bg-white rounded-lg transition-all duration-500 shadow-md right-[-100%] w-60 mt-[100px] "
          }`}
          linkStyles={"capitalize cursor-pointer my-4"}
        />
        <div className="flex items-center ">
          <div className="hidden lg:block">
            <Button
              type="button"
              title="Login"
              icon={<BiUser />}
              variant="btn_secondary"
            />
          </div>

          {!menuOpened ? (
            <IoMenu
              className="lg:hidden inline-block cursor-pointer regular-24 text-[30px] hover:text-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <IoClose
              className="lg:hidden inline-block cursor-pointer regular-24  text-[30px] hover:text-secondary"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
