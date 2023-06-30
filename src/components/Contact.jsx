import Fade from "react-reveal/Fade";
import Lottie from "lottie-react";
import Email from "/src/email.json";

const Contact = () => {
  return (
    <div className="my-2" id="contact">
      <div className="text-center mb-12">
        <h2 className="uppercase min-w-fit mx-auto inline-block border-b-2 text-2xl dark:border-white border-gray-800   text-gradient font-semibold px-4">
          get in touch
        </h2>
      </div>

      <div className="flex flex-col-reverse lg:grid  my-20 lg:grid-cols-2 gap-10 justify-items-center items-center">
        <Fade left cascade>
          <div className="w-full">
            <form
              action="https://formspree.io/f/mgebblpg"
              method="post"
              className="flex flex-col gap-5"
            >
              <input
                className="w-full py-3 px-6 bg-transparent border-2 rounded-md dark:text-gray-200 text-gray-800 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400 dark:border-white border-gray-800 "
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <input
                className="w-full py-3 px-6 bg-transparent border-2 rounded-md dark:text-gray-200 text-gray-800 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400 dark:border-white border-gray-800"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <input
                className="w-full py-3 px-6 bg-transparent border-2 rounded-md dark:text-gray-200 text-gray-800 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400 dark:border-white border-gray-800"
                type="text"
                name="subject"
                placeholder="Enter your subject"
              />
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                className="w-full py-3 px-6 h-40 bg-transparent border-2 rounded-md dark:text-gray-200 text-gray-800 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400 dark:border-white border-gray-800"
              />
              <button className="w-full my-2 py-3 px-6 rounded-md bg-sky-500 hover:bg-rose-800 transition-all text-gray-200 font-semibold   focus:outline-0 ">
                Send Message
              </button>
            </form>
          </div>
        </Fade>
        <Fade right cascade>
          <Lottie animationData={Email} />
          {/* <img src={email} className="min-w-[380px] hidden lg:block" /> */}
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
