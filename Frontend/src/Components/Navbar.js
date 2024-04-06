import React, { useState, useEffect } from "react";

// index import
import man from "../assests/man.png";
import background_img from "../assests/background.jpg";



function Navbar() {
  // State variables for background color and padding top
  const [bgColor, setBgColor] = useState("transparent");

  // useEffect to handle scroll event and update background color and padding top
  useEffect(() => {
    const handleScroll = () => {
      // Change background color and padding top based on scroll position
      if (window.scrollY > 100) {
        setBgColor("#0e0e0e");
      } else {
        setBgColor("transparent");
      }
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <>
      
      <nav
        class="fixed  md:py-2 w-[-webkit-fill-available] z-20 "
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.3s, padding-top 0.3s",
        }}
      >
        <div className="flex flex-col  sm:flex-row sm:mx-10 lg:mx-40 text-center justify-between">
          <a
            href="/"
            className="baloo-paaji text-white py-4 text-3xl font-medium"
          >
            MohitJi
          </a>
          <div className=" flex text-center px-2 mb-5  bg-[#ffffff2e]  rounded-3xl  py-1.5 sm:align-middle sm:m-auto font-normal  text-gray-700 justify-center text-sm  ">
            <a
              href="/"
              class="mx-1.5 text-white rounded-2xl px-3 sm:px-5 py-1.5 hover:bg-gray-100 hover:text-black"
            >
              HOME
            </a>
            <a
              href="/projects"
              class="mx-1.5 text-white rounded-2xl px-3 sm:px-5 py-1.5 hover:bg-gray-100 hover:text-black"
            >
              PROJECTS
            </a>
            <a
              href="/resume"
              class="mx-1.5 text-white rounded-2xl px-3 sm:px-5 py-1.5 hover:bg-gray-100 hover:text-black"
            >
              RESUME
            </a>
            <a
              href="/about"
              class="mx-1.5 text-white rounded-2xl px-3 sm:px-5 py-1.5 hover:bg-gray-100 hover:text-black"
            >
              ABOUT ME
            </a>
          </div>
          <div className="flex">
            <a href="/contact" className="m-auto">

            <button className="hidden sm:block text-sm  text-white border-[#ffffff7c] hover:bg-white hover:text-black border px-5 py-1.5 rounded m-auto ">
              CONTACT ME
            </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
