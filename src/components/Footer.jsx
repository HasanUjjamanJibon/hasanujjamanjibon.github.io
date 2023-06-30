import React from "react";

const Footer = () => {
  return (
    <div className="space-y-3 divide-y font-semibold  divide-gray-800 px-4">
      <div className="justify-center flex  items-center  flex-wrap divide-x-2 divide-gray-700">
        <a
          href="https://www.facebook.com/hasanujjamanjibon.dev/"
          target="_blank"
          className="flex items-center gap-2 capitalize text-sm px-2  text-gradient"
        >
          facebook
        </a>
        <a
          href="https://www.linkedin.com/in/hasan-ujjaman-jibon/"
          target="_blank"
          className="flex items-center gap-2 capitalize text-sm px-2  text-gradient"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/hasanujjamanjibon"
          target="_blank"
          className="flex items-center gap-2 capitalize text-sm px-2  text-gradient"
        >
          Github
        </a>
        <a
          href="https://www.youtube.com/channel/UCrJl7GUSl5j25OAxFb9Mj_A"
          target="_blank"
          className="flex items-center gap-2 capitalize text-sm px-2  text-gradient"
        >
          Youtube
        </a>
      </div>
      <div className="justify-center lg:justify-between flex flex-wrap items-center dark:text-gray-500 text-gray-800 text-xs py-3 gap-3 capitalize">
        <span>Design & development by Hasan Ujjaman Jibon</span>
        <span>&copy; 2023, all right reserved</span>
      </div>
    </div>
  );
};

export default Footer;
