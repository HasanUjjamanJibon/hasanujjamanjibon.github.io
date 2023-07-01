import React, { useContext, useEffect, useState } from "react";
import { FiDownloadCloud, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import NavItems from "./NavItems";
import { StateContext } from "../App";

const Navbar = () => {
  const { isShow, setShow } = useContext(StateContext);
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navItemsShow = () => {
    setShow(!isShow);
  };

  return (
    <div className="h-16 z-50 shadow-lg dark:bg-gray-950 bg-gray-200  flex sticky top-0   items-center md:px-8">
      <div className="block w-full">
        <div className="px-4 lg:px-0  py-2  font-medium uppercase text-base flex justify-between items-center overflow-hidden">
          <span
            spy={true}
            smooth={true}
            offset={50}
            duration={200}
            className="text-2xl capitalize  hand-font lg:text-4xl cursor-pointer dark:text-white text-gray-800 cursor-pointer"
          >
            hasan
          </span>

          <nav className="hidden lg:block">
            <ul className="flex justify-center items-center gap-4 text-sm dark:text-gray-400  text-gray-600">
              <NavItems></NavItems>
            </ul>
          </nav>
          <div className="flex gap-4 items-center ">
            <div className="hidden lg:block dark:text-white text-black text-2xl">
              {isDark ? (
                <FiMoon
                  className="inline-block cursor-pointer"
                  onClick={() => setDark(!isDark)}
                >
                  {/* moon icon */}
                </FiMoon>
              ) : (
                <FiSun
                  className="flex  cursor-pointer "
                  onClick={() => setDark(!isDark)}
                >
                  {/* sun icon */}
                </FiSun>
              )}
            </div>

            <a
              href="https://drive.google.com/uc?export=download&id=1ZDpIA6oJTexp6SLZJplFraCmR7dKgX9u"
              className="hidden text-sm hover:bg-rose-800  px-3 py-2 uppercase dark:border-white dark:text-white text-black hover:text-white  border-black border-2 hover:font-semibold  transition-colors duration-500  rounded-md lg:flex items-center gap-2"
              download
            >
              Resume
              <FiDownloadCloud />
            </a>
          </div>

          <div className="block lg:hidden">
            <div className=" flex items-center gap-5 h-full ">
              <div className="flex dark:text-white text-black text-xl ">
                {isDark ? (
                  <FiMoon
                    className="inline-block cursor-pointer stroke-2	"
                    onClick={() => setDark(!isDark)}
                  >
                    {/* moon icon */}
                  </FiMoon>
                ) : (
                  <FiSun
                    className="flex  cursor-pointer"
                    onClick={() => setDark(!isDark)}
                  >
                    {/* sun icon */}
                  </FiSun>
                )}
              </div>
              <span className="cursor-pointer">
                {isShow ? (
                  <AiOutlineClose
                    onClick={navItemsShow}
                    className="text-xl dark:text-white text-gray-800"
                  />
                ) : (
                  <FiMenu
                    onClick={navItemsShow}
                    className="text-xl dark:text-white text-gray-800"
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`block  text-sm lg:hidden shadow-md  rounded-b-md uppercase transition-transform  duration-500  dark:text-gray-400 text-gray-800 ${
            isShow ? "-translate-y-3 " : "-translate-y-80"
          }  absolute left-0 right-0 -z-40 w-full dark:bg-gray-950 bg-gray-200  text-center py-10 space-y-3 `}
        >
          <NavItems></NavItems>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
