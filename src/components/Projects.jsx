import React from "react";
import { BiLink } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
const Projects = () => {
  return (
    <div id="projects" className=" py-20 dark:text-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="uppercase min-w-fit mx-auto inline-block border-b-2 text-2xl dark:border-white border-gray-800   text-gradient font-semibold px-4">
          Projects
        </h2>
      </div>
      <div className=" w-full px-5  grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* project 03 */}

        <Fade bottom cascade>
          <div className="w-full shadow-xl dark:hover:shadow-gray-700 hover:shadow-gray-500 shadow-gray-400 transition-shadow duration-300 ease-in-out dark:shadow-gray-900 h-fit py-5 space-y-4 px-8">
            <div className="h-48  w-full overflow-hidden ">
              <img
                src="https://i.postimg.cc/288TM9Lp/chocolate.png"
                className="w-full transition-transform ease-in-out duration-500 rounded hover:scale-110"
                alt="website_thumbnail"
              />
            </div>
            <div className="space-y-2">
              <h2 className="border-b-2 dark:border-gray-200 border-gray-500 text-lg font-medium  inline-block capitalize">
                {" "}
                Chocolate Management
              </h2>
              <p>Technology: React JS, Tailwind CSS, Express JS, MongoDB</p>
              <div className="flex justify-between items-center border-t-2 border-gray-500 pt-2">
                <a
                  target="_blank"
                  className="flex items-center gap-1"
                  href="https://github.com/HasanUjjamanJibon/chocolate-management-client-code"
                >
                  <BiLink />
                  Client
                </a>
                <a
                  target="_blank"
                  className="flex items-center gap-1"
                  href="https://github.com/HasanUjjamanJibon/chocolate-management-server-code"
                >
                  <BiLink />
                  Server
                </a>
                <a
                  target="_blank"
                  className="flex items-center gap-1"
                  href="https://chocolate-management-5d75d.web.app/"
                >
                  <BiLink />
                  Live
                </a>
              </div>
            </div>
          </div>
        </Fade>
        {/* project 01 */}
        <Fade bottom cascade>
          <div className="w-full shadow-xl dark:hover:shadow-gray-700 hover:shadow-gray-500 shadow-gray-400 transition-shadow duration-300 ease-in-out dark:shadow-gray-900 h-fit py-5 space-y-4 px-8">
            <div className="h-48  w-full overflow-hidden ">
              <img
                src="https://i.postimg.cc/hPzQXVHz/toy.png"
                className=" w-full translate-y-0 rounded hover:-translate-y-full duration-[3s] ease-in transition-transform"
                alt="website_thumbnail"
              />
            </div>
            <div className="space-y-2">
              <h2 className="border-b-2  dark:border-gray-200 border-gray-500 text-lg font-medium  inline-block capitalize">
                ToyTopiaStore
              </h2>
              <p>
                Technology: React JS, Tailwind CSS, Firebase Authentication &
                Hosting, Express JS, MongoDB
              </p>
              <div className="flex justify-between items-center border-t-2 border-gray-500 pt-2">
                <a
                  target="_blank"
                  className="flex items-center gap-1"
                  href="https://github.com/HasanUjjamanJibon/toytopiastore-client-code"
                >
                  <BiLink />
                  Client
                </a>
                <a
                  target="_blank"
                  className="flex items-center gap-1"
                  href="https://github.com/HasanUjjamanJibon/toytopiastore-server-code"
                >
                  <BiLink />
                  Server
                </a>
                <a
                  target="_blank"
                  className="flex items-center gap-1"
                  href="https://toyshop-c4115.web.app/"
                >
                  <BiLink />
                  Live
                </a>
              </div>
            </div>
          </div>
        </Fade>

        {/* project 02 */}
        <Fade bottom cascade>
          <div className="w-full shadow-xl dark:hover:shadow-gray-700 hover:shadow-gray-500 shadow-gray-400 transition-shadow duration-300 ease-in-out dark:shadow-gray-900 h-fit py-5 space-y-4 px-8">
            <div className="h-48  w-full overflow-hidden ">
              <img
                src="https://i.postimg.cc/kXhbPTjq/Food-Mania-1.png"
                className=" w-full translate-y-0 rounded  hover:-translate-y-full duration-[3s] ease-in-out transition-transform"
                alt="website_thumbnail"
              />
            </div>
            <div className="space-y-2">
              <h2 className="border-b-2 dark:border-gray-200 border-gray-500 text-lg font-medium  inline-block capitalize">
                {" "}
                FoodMania
              </h2>
              <p>
                Technology: React JS, Tailwind CSS, Firebase Authentication,
                Express JS
              </p>
              <div className="flex justify-between items-center border-t-2 border-gray-500 pt-2">
                <a
                  target="_blank"
                  className="flex items-center gap-1"
                  href="https://github.com/HasanUjjamanJibon/foodmania-client-code"
                >
                  <BiLink />
                  Client
                </a>
                <a
                  target="_blank"
                  className="flex items-center gap-1"
                  href="https://github.com/HasanUjjamanJibon/foodmania-server-code"
                >
                  <BiLink />
                  Server
                </a>
                <a
                  target="_blank"
                  className="flex items-center gap-1"
                  href="https://food-reciepe-ddcfc.web.app/"
                >
                  <BiLink />
                  Live
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
