import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FiDownloadCloud, FiMail } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div
      id="banner"
      className="flex justify-center items-center h-[calc(100vh-4rem)] px-4 lg:px-0 bg-[url('/images/bg.png')] "
    >
      <div className=" w-full flex justify-center items-center h-full max-w-6xl  mx-auto ">
        <div className="flex flex-col justify-center items-center  h-fit ">
          <div>
            <h1 className="text-5xl text-center font-bold leading-tight dark:text-gray-200 text-gray-800 ">
              Hi, I'm
              <span className="block capitalize font-bold text-gradient">
                Hasan Ujjaman
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-center   mt-1">
              <TypeAnimation
                className="capitalize font-semibold inline-block  dark:text-gray-200 text-gray-800"
                sequence={[
                  "Front End developer", // Types 'One'
                  1000, // Waits 1s
                  "MERN Stack developer", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
              />
            </div>
            <p className="mt-3 text-center max-w-3xl  dark:text-gray-400 text-gray-800">
              Experienced front-end developer with expertise in HTML, CSS, and
              JavaScript. Committed to creating visually appealing user
              interfaces, clean code, and seamless web experiences. Passionate
              about staying updated with emerging technologies for efficient
              development and exceptional results.
            </p>
          </div>
          <div className="flex justify-center  dark:text-white text-gray-800 w-full mt-5 space-x-9 ">
            <Fade left >
              <a
                href="https://drive.google.com/uc?export=download&id=1ZDpIA6oJTexp6SLZJplFraCmR7dKgX9u"
                className=" text-sm hover:bg-rose-800  px-3 py-2 uppercase dark:border-white  border-2 hover:text-gray-200 hover:font-semibold  transition-colors duration-500 rounded-md flex items-center gap-2 border-gray-800"
                download
              >
                Resume
                <FiDownloadCloud />
              </a>
            </Fade>
            <Fade right cascade>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className=" text-sm cursor-pointer hover:bg-rose-800  px-3 py-2 uppercase dark:border-white  border-2 hover:text-gray-200 hover:font-semibold  transition-colors duration-500 rounded-md flex items-center gap-2 border-gray-800"
              >
                Contact <FiMail />
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
