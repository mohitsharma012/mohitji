import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";


// icons importing
import designIcon from "../assests/icons/design.png";
import buildIcon from "../assests/icons/build.png";
import deployIcon from "../assests/icons/deploy.png";
import pythonIcon from "../assests/icons/python.png";
import cIcon from "../assests/icons/c.png";
import cppIcon from "../assests/icons/c-.png";
import cssIcon from "../assests/icons/css-3.png";
import htmlIcon from "../assests/icons/html-5.png";
import jsIcon from "../assests/icons/js.png";
import djangoIcon from "../assests/icons/django.png";
import nodejsIcon from "../assests/icons/nodejs.png";
import expressIcon from "../assests/icons/express.png";
import reactjsIcon from "../assests/icons/reactjs.png";
import bootstrapIcon from "../assests/icons/bootstrap.png";
import tailwindIcon from "../assests/icons/tailwind.png";
import mysqlIcon from "../assests/icons/mysql.png";
import sqlliteIcon from "../assests/icons/sqllite.png";
import postgresqlIcon from "../assests/icons/postgresql.png";
import mongodbIcon from "../assests/icons/mongodb.png";
import gitIcon from "../assests/icons/git.png";
import githubIcon from "../assests/icons/github.png";
import InstaIcon from "../assests/icons/insta.png";
import LinkedinIcon from "../assests/icons/linkedin.png";
import WhatsappIcon from "../assests/icons/whatsapp.png";
import GmailIcon from "../assests/icons/gmail.png";

export const IndexComponent = ({ ProjectsDatabase, PortfolioPage }) => {
    const { topic } = useParams(); // Get the hash fragment from the URL

    
    // scroll effect when click on navbar btn 
    useEffect(() => {
        // Scroll to the topic when the component mounts
        const topicElement = document.getElementById(topic);
        if (topicElement) {
          topicElement.scrollIntoView({ behavior: "smooth" });
        }
      }, [topic]);

  return (
    <>
      <Navbar />

      <main className=" bg-gray-100 ">
        {/* index header section  */}
        <section className=" min-h-[100vh] IndexHeaderBackground flex">
          <div className="m-auto text-center">
            <h2 className="text-gray-400 mb-3 md:text-3xl text-3xl">
              HI, I AM MOHIT
            </h2>
            <div className="">
              <h3 className="text-gray-300 md:text-[6rem] text-6xl font-bold md:leading-[5.0rem] font-mono francois-one-regular">
                Full Stack Web{" "}
              </h3>
              <h3 className="text-gray-300 md:text-[6rem] text-6xl font-bold md:leading-[5.0rem] font-mono francois-one-regular">
                Developer
              </h3>
            </div>
            <p className="text-gray-400 md:text-lg w-full px-3 sm:w-2/3 mx-auto py-5 pb-10">
              Let's turn your visionary concepts into digital wonders, crafting
              each  element with expertise and care.
            </p>

            <a href="/contact" className="text-white  outline outline-offset-8 outline-white rounded-3xl hover:bg-gray-300 hover:text-black bg-[#ffffff2e] md:px-20 px-16 py-2 ">
              {" "}
              Let's Talk
            </a>
          </div>
        </section>
        {/* index about section  */}
        <section className="flex flex-col gap-2 sm:flex-row container md:w-4/5 lg:w-3/4 xl:w-1/2 m-auto  my-0 md:my-1">
          <div className="flex-col w-full sm:w-1/2 row hidden sm:block  sm:mt-20 md:mt-12">
            <div className="hover:shadow-xl  border-2 w-full rounded-xl my-3 sm:my-2    flex py-5 md:py-2">
              <div className="  m-auto   flex align-middle  ">
                <img
                  src={designIcon}
                  alt="img"
                  className=" w-[6vh] md:w-[9vh] md:scale-75"
                />
                <div className="my-auto ms-5">
                  <h2 className="w-auto align-middle m-auto text-xl sm:text-xl font-serif ">
                    {" "}
                    We Design
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:shadow-xl  border-2 w-full rounded-xl my-3 sm:my-2   flex py-5 md:py-2">
              <div className="  m-auto   flex align-middle  ">
                <img
                  src={buildIcon}
                  alt="img"
                  className=" w-[6vh] md:w-[9vh] md:scale-75"
                />
                <div className="my-auto ms-5">
                  <h2 className="w-auto align-middle m-auto text-xl sm:text-xl font-serif ">
                    {" "}
                    We Build
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:shadow-xl  border-2 w-full rounded-xl my-3 sm:my-2   flex py-5 md:py-2">
              <div className="  m-auto   flex align-middle  ">
                <img
                  src={deployIcon}
                  alt="img"
                  className=" w-[6vh] md:w-[9vh] md:scale-75"
                />
                <div className="my-auto ms-5">
                  <h2 className="w-auto align-middle m-auto text-xl sm:text-xl font-serif ">
                    {" "}
                    We Deploy
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2  my-10">
            <h3 className="md:text-4xl text-4xl font-semibold">
              What do I help?
            </h3>
            <p className="md:text-xl text-lg text-gray-700 leading-9 md:my-4 ">
              I'm here to assist you in finding solutions and resolving your
              web-related challenges effectively. Utilizing process design, I
              specialize in crafting digital products tailored to your needs.{" "}
              <br /> <br />
              Moreover, I offer support in enhancing your online presence and
              business operations, ensuring comprehensive assistance for your
              success in the digital realm.
            </p>
          </div>
        </section>
        {/* index experience section  */}
        <section class="text-gray-600 body-font lg:mx-24 xl:mx-62">
          <div class="container flex flex-col gap-2  px-4 py-0 mx-auto">
            {/* experience heading  */}
            <div class="flex flex-col text-center w-full ">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">
                MY EXPERTISE
              </h1>
            </div>
            {/* Programing language contianer  */}
            <div class="flex gap-5 flex-wrap m-auto">
              <div class=" flex flex-col lg:w-full m-auto lg:mx-32 border-gray-200 border-4 px-4 py-4 hover:shadow-xl rounded-lg">
                <div className="flex flex-col lg:flex-row  m-auto my-auto">
                  <h2 class="text-gray-900 text-center lg:w-1/4  text-lg lg:mr-10 m-auto font-medium">
                    Programming Languages
                  </h2>
                  <div className="flex flex-wrap mt-5 lg:mt-0 lg:w-3/4 gap-4">
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[12%] lg:w-[7%]"
                      src={pythonIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[12%] lg:w-[7%]"
                      src={cIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[12%] lg:w-[7%]"
                      src={cppIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[12%] lg:w-[7%]"
                      src={jsIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[12%] lg:w-[7%]"
                      src={htmlIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[12%] lg:w-[7%]"
                      src={cssIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Frameworks Libraries container  */}
            <div class="flex gap-5 flex-wrap m-auto">
              <div class=" flex flex-col lg:w-full m-auto lg:mx-32 border-gray-200 border-4 px-4 py-4 hover:shadow-xl rounded-lg">
                <div className="flex flex-col lg:flex-row  m-auto my-auto">
                  <h2 class="text-gray-900 text-center lg:w-1/4 text-lg lg:mr-10 m-auto font-medium">
                    Framework & Libraries
                  </h2>
                  <div className="flex flex-wrap mt-5 lg:mt-0 lg:w-3/4 gap-4">
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[15%] lg:w-[12%]   my-auto"
                      src={djangoIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[15%] lg:w-[12%]   my-auto"
                      src={nodejsIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[16%] lg:w-[12%]    my-auto rounded "
                      src={expressIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[20%] lg:w-[15%]    my-auto rounded "
                      src={reactjsIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[10%] lg:w-[6%]   my-auto"
                      src={bootstrapIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[40%] lg:w-[20%]   my-auto"
                      src={tailwindIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Database container  */}
            <div class="flex gap-5 flex-wrap m-auto">
              <div class=" flex flex-col lg:w-full m-auto lg:mx-32 border-gray-200 border-4 px-4 py-4 hover:shadow-xl rounded-lg">
                <div className="flex flex-col lg:flex-row  m-auto my-auto">
                  <h2 class="text-gray-900 text-center lg:w-1/4 text-lg lg:mr-10 m-auto font-medium">
                    Database Management{" "}
                  </h2>
                  <div className="flex flex-wrap mt-5 lg:mt-0 lg:w-3/4 gap-4">
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[18%] lg:w-[12%] my-auto"
                      src={mysqlIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[22%] lg:w-[14%] my-auto"
                      src={sqlliteIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[25%] lg:w-[19%] my-auto"
                      src={postgresqlIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[21%] lg:w-[18%] my-auto"
                      src={mongodbIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  Version Control  */}
            <div class="flex gap-5 flex-wrap m-auto">
              <div class=" flex flex-col w-full  lg:mx-32 border-gray-200 border-4 px-14 py-4 hover:shadow-lg rounded-lg">
                <div className="flex w-full flex-col lg:flex-row  m-auto my-auto">
                  <h2 class="text-gray-900  lg:w-1/4 text-lg lg:mr-10 m-auto font-medium">
                    Version Control
                  </h2>
                  <div className="flex flex-wrap mt-5 lg:mt-0 lg:w-3/4 gap-4">
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[23%] lg:w-[12%] my-auto"
                      src={gitIcon}
                    />
                    <img
                      alt="icon"
                      class=" bg-gray-100 w-[45%] lg:w-[20%] my-auto"
                      src={githubIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
      </main>
    </>
  );
};
