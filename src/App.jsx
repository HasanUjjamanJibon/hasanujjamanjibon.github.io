import React, { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar,";
import Banner from "./components/Banner";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
export const StateContext = createContext();
import Preloader from "./components/PreLoader/Preloader";

const App = () => {
  const [isShow, setShow] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <StateContext.Provider value={{ isShow, setShow }}>
      <div className="dark:bg-gray-950 bg-gray-200 text-gray-200 min-h-fit">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="max-w-6xl mx-auto px-3 lg:px-0 tracking-wide h-fit">
          <About></About>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </StateContext.Provider>
  );
};

export default App;
