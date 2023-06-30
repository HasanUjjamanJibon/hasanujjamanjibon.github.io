import skills from "/mailbox.svg";

const Contact = () => {
  return (
    <div className="my-2" id="contact">
      <div className="text-center mb-12">
        <h2 className="uppercase min-w-fit mx-auto inline-block border-b-2 text-2xl dark:border-white border-gray-800   text-gradient font-semibold px-4">
          get in touch
        </h2>
      </div>
      <div className=" grid grid-cols-1 my-20 lg:grid-cols-2 gap-10 justify-items-center items-center">
        <div className="w-full">
          <form
            action="https://formspree.io/f/mgebblpg"
            method="post"
            className="flex flex-col gap-5"
          >
            <input
              className="w-full py-3 px-6 bg-transparent border-2 rounded-md text-gray-700 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400 dark:border-white border-gray-800 "
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <input
              className="w-full py-3 px-6 bg-transparent border-2 rounded-md text-gray-700 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400 dark:border-white border-gray-800"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <input
              className="w-full py-3 px-6 bg-transparent border-2 rounded-md text-gray-700 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400 dark:border-white border-gray-800"
              type="text"
              name="subject"
              placeholder="Enter your subject"
            />
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              className="w-full py-3 px-6 h-40 bg-transparent border-2 rounded-md text-gray-700 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400 dark:border-white border-gray-800"
            />
            <button className="w-full my-2 py-3 px-6 rounded-md bg-rose-900 hover:bg-rose-950 transition-all text-gray-200 font-semibold   focus:outline-0 ">
              Send Message
            </button>
          </form>
        </div>
        <img src={skills} className="min-w-[380px] hidden lg:block" alt="" />
      </div>
    </div>
  );
};

export default Contact;
