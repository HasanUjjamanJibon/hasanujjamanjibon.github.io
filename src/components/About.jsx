import React from "react";

import myImg from "/images/image.jpg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div id="about" className="my-2 py-20">
      <div className="text-center mb-12">
        <h2 className="uppercase min-w-fit mx-auto inline-block border-b-2 text-2xl dark:border-white border-gray-800  text-gradient font-semibold px-4">
          About me
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Fade left cascade>
          <div className="w-full h-96 text-center ">
            <img
              src={myImg}
              className="rounded-full w-auto border-4 dark:border-gray-200 border-gray-800 inline-block h-full"
              alt=""
            />
          </div>
        </Fade>{" "}
        <Fade right cascade>
          <div className="text-center lg:text-left">
            <p className="my-3 dark:text-gray-400 text-gray-800">
              Front-end web developer proficient in HTML, CSS, and JavaScript.
              Passionate about user-centric design, clean code, and creating
              seamless web experiences. Continuously learning and exploring new
              technologies to enhance development efficiency and produce
              exceptional results.
            </p>
            <h2 className="uppercase inline-block border-b-2 text-md dark:border-white border-gray-800   text-gradient font-semibold px-2 lg:px-0 lg:pe-4">
              My Skills
            </h2>
            <div className="uppercase text-sm my-3 ">
              <ul className=" flex flex-wrap gap-1  justify-center lg:justify-start">
                <li className="text-list-Items">html</li>
                <li className="text-list-Items">css</li>
                <li className="text-list-Items">javascript</li>
                <li className="text-list-Items">bootstrap</li>
                <li className="text-list-Items">tailwindcss</li>
                <li className="text-list-Items">reactjs</li>
                <li className="text-list-Items">es6</li>
                <li className="text-list-Items">mongoDB</li>
                <li className="text-list-Items">firebase</li>
                <li className="text-list-Items">expressjs</li>
              </ul>
            </div>
            <h2 className="uppercase inline-block border-b-2 text-md dark:border-white border-gray-800   text-gradient font-semibold px-2 lg:px-0 lg:pe-4">
              tools
            </h2>
            <div className="uppercase text-sm my-3 ">
              <ul className=" flex flex-wrap gap-1 justify-center lg:justify-start">
                <li className="text-list-Items">vs code</li>
                <li className="text-list-Items">git & github</li>
                <li className="text-list-Items">chrome dev tools</li>
                <li className="text-list-Items">npm</li>
                <li className="text-list-Items">netlify</li>
                <li className="text-list-Items">vercel</li>
                <li className="text-list-Items">figma</li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
