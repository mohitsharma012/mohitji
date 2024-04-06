import React from "react";
// icoons import
import InstaIcon from "../assests/icons/insta.png";
import LinkedinIcon from "../assests/icons/linkedin.png";
import WhatsappIcon from "../assests/icons/whatsapp.png";
import GmailIcon from "../assests/icons/gmail.png";
export default function Footer() {
  return (
    <>
    
      {/* My social section  */}
      <section className="flex  md:my-0 md:mt-12 mt-20 md:py-12 bg-gray-700 py-8">
          <div className="flex flex-col m-auto md:flex-row gap-5">
            <div className=" pr-12 flex flex-col gap-1">
              <h1 className="  font-medium text-xl md:text-2xl text-white">
                Reach me now
              </h1>
              <span className="  hidden md:block  text-base text-gray-300">
                Always feel Free to Contact & Hire me
              </span>
            </div>
            <div className="flex gap-6 md:gap-7 mb-3  m-auto">
              <a href="">
                <img src={InstaIcon} alt="" className="w-11 md:w-10" />
              </a>
              <a href="">
                <img src={LinkedinIcon} alt="" className="w-11 md:w-10" />
              </a>
              <a href="">
                <img src={WhatsappIcon} alt="" className="w-11 md:w-10" />
              </a>
              <a href="">
                <img src={GmailIcon} alt="" className="w-11 md:w-10" />
              </a>
            </div>
          </div>
        </section>
      <footer class="flex justify-center gap-[4rem] sm:gap-0 lg:gap-0 py-8  bg-gray-900">
        <div className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 pr-3  text-xl m-auto text-white sm:border-r-2 sm:border-gray-200">MohitJi</span>
        </div>
        <div className="flex">
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-0  sm:py-2 sm:mt-0 my-auto">
            © 2024 mohitji
          </p>{" "}
        </div>
      </footer>
    </>
  );
}
