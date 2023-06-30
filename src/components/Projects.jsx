import React from "react";
import toy from "/images/Projects/toy.png";
import chocolate from "/images/Projects/chocolate.png";
import { BiLink } from "react-icons/bi";

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
        <div className="w-full shadow-xl h-fit py-5 space-y-4 px-8">
          <div className="h-48  w-full overflow-hidden ">
            <img
              src={chocolate}
              className="w-full transition-transform ease-in-out duration-500 hover:scale-110"
              alt="website_thumbnail"
            />
          </div>
          <div className="space-y-2">
            <h2 className="border-b-2 inline-block"> Chocolate Management</h2>
            <p>Technology: React JS, Tailwind CSS, Express JS, MongoDB</p>
            <div className="flex justify-between items-center">
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
        {/* project 01 */}
        <div className="w-full shadow-xl h-fit py-5 space-y-4 px-8">
          <div className="h-48  w-full overflow-hidden ">
            <img
              src={toy}
              className=" w-full translate-y-0  hover:-translate-y-full duration-[3s] ease-in transition-transform"
              alt="website_thumbnail"
            />
          </div>
          <div className="space-y-2">
            <h2 className="border-b-2 inline-block">ToyTopiaStore</h2>
            <p>
              Technology: React JS, Tailwind CSS, Firebase Authentication &
              Hosting, Express JS, MongoDB
            </p>
            <div className="flex justify-between items-center">
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

        {/* project 02 */}
        <div className="w-full shadow-xl h-fit py-5 space-y-4 px-8">
          <div className="h-48  w-full overflow-hidden ">
            <img
              src="https://i.postimg.cc/kXhbPTjq/Food-Mania-1.png"
              className=" w-full translate-y-0  hover:-translate-y-full duration-[3s] ease-in-out transition-transform"
              alt="website_thumbnail"
            />
          </div>
          <div className="space-y-2">
            <h2 className="border-b-2 inline-block capitalize"> FoodMania</h2>
            <p>
              Technology: React JS, Tailwind CSS, Firebase Authentication,
              Express JS
            </p>
            <div className="flex justify-between items-center">
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
      </div>
    </div>
  );
};

export default Projects;
