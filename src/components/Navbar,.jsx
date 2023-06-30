import React, { useContext, useState } from "react";
import { FiDownloadCloud, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import NavItems from "./NavItems";
import { StateContext } from "../App";

const Navbar = () => {
  const { isShow, setShow } = useContext(StateContext);

  const navItemsShow = () => {
    setShow(!isShow);
  };
  return (
    <div className=" h-fit z-50 shadow-lg bg-gray-950 max-w-7xl mx-auto flex sticky top-0  items-center">
      <div className="block w-full">
        <div className="px-4 lg:px-0  py-2  font-medium uppercase text-base flex justify-between items-center overflow-hidden">
          <span
            spy={true}
            smooth={true}
            offset={50}
            duration={200}
            className="text-4xl capitalize  hand-font lg:text-5xl cursor-pointer text-white"
          >
            hasan
          </span>

          <nav className="hidden lg:block">
            <ul className="flex justify-center items-center gap-4 text-sm text-gray-400 ">
              <NavItems></NavItems>
            </ul>
          </nav>
          <a
            href="https://drive.google.com/uc?export=download&id=1ZDpIA6oJTexp6SLZJplFraCmR7dKgX9u"
            className="hidden text-sm hover:bg-rose-950  px-3 py-2 uppercase border-white border-2 hover:font-semibold  transition-colors duration-500  rounded-md lg:flex items-center gap-2"
            download
          >
            Resume
            <FiDownloadCloud />
          </a>

          <div className="block lg:hidden">
            <div className="relative flex items-center gap-5">
              <span className="cursor-pointer">
                {isShow ? (
                  <AiOutlineClose onClick={navItemsShow} className="text-xl" />
                ) : (
                  <FiMenu onClick={navItemsShow} className="text-xl" />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`block  text-sm lg:hidden shadow-md  rounded-b-md uppercase transition-transform  duration-500 text-gray-400 ${
            isShow ? "-translate-y-3 " : "-translate-y-80"
          }  absolute left-0 right-0 -z-40 w-full bg-gray-950 text-center py-10 space-y-3 `}
        >
          <NavItems></NavItems>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
