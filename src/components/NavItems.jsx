import React, { useContext } from "react";
import { StateContext } from "../App";
import { Link, animateScroll as scroll } from "react-scroll";

const NavItems = () => {
  const { isShow, setShow } = useContext(StateContext);
  return (
    <>
      <li
        onClick={() => setShow(!isShow)}
        className="transition-colors active:text-white duration-500 hover:text-white list-none cursor-pointer"
      >
        <Link to="banner" spy={true} smooth={true} offset={-50} duration={1000}>
          Home
        </Link>
      </li>
      <li
        onClick={() => setShow(!isShow)}
        className="transition-colors active:text-white duration-500 hover:text-white list-none cursor-pointer"
      >
        <Link to="about" spy={true} smooth={true} offset={-50} duration={1000}>
          about
        </Link>
      </li>
      <li
        onClick={() => setShow(!isShow)}
        className="transition-colors active:text-white duration-500 hover:text-white list-none cursor-pointer"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
        >
          projects
        </Link>
      </li>
      {/* <li
        onClick={() => setShow(!isShow)}
        className="transition-colors active:text-white duration-500 hover:text-white list-none cursor-pointer"
      >
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
        >
          Services
        </Link>
      </li> */}
      <li
        onClick={() => setShow(!isShow)}
        className="transition-colors active:text-white duration-500 hover:text-white list-none cursor-pointer"
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          contact
        </Link>
      </li>
    </>
  );
};

export default NavItems;
