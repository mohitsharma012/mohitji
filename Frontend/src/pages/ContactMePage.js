import React from "react";
import Navbar from "../Components/Navbar";

export default function ContactMePage() {
  return (
    <>
      <div className="bg-black fixed  block h-36 w-full md:h-20">
        <Navbar />
      </div>
      {/* index header section  */}

      <section className=" min-h-80 md:min-h-[28rem] IndexHeaderBackground flex">
        <div className="md:mx-52 m-auto mx-10 flex flex-col gap-1 md:gap-7">
          <h3 className="text-gray-300  md:text-7xl pt-28 md:pt-14 text-5xl font-bold font-mono francois-one-regular">
            Contact Me
          </h3>
          <p className="text-gray-400 text-base md:text-lg ">
            {" "}
            <a href="/">Home</a> / <a href="/contact">Contact Me</a>{" "}
          </p>
        </div>
      </section>
      <section className="flex pt-10">
        
      </section>
    </>
  );
}
