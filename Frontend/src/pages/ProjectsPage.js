import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";



export default function ResumePage({ ProjectsDatabase }) {
  //    function to download resume
  function downloadResume() {
    // Path of resume file
    const resumeFilePath = "./Mohit Sharma.pdf";

    // Create a temporary anchor element
    const anchor = document.createElement("a");

    // Set the href attribute to the path of the resume file
    anchor.href = resumeFilePath;

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Click the anchor element to initiate download
    anchor.click();

    // Remove the anchor element from the body
    document.body.removeChild(anchor);
  }
  return (
    <>
      <Navbar />
      <section className="flex flex-col ">
        <div className="min-h-80 md:min-h-[28rem] IndexHeaderBackground flex">
          <div className="md:mx-52 m-auto mx-10 flex flex-col gap-1 md:gap-7">
            <h3 className="text-gray-300  md:text-7xl pt-28 md:pt-14 text-5xl font-bold font-mono francois-one-regular">
              Projects
            </h3>
            <p className="text-gray-400 text-base md:text-lg "> <a href="/">Home</a> / <a href="/projects">Projects</a> </p>
          </div>
        </div>
        <div className="flex py-10">
          <div className="m-auto md:w-[80%]">
            {ProjectsDatabase.map((project, index) => (
              <Link
                to={`/project/${project.ProjectId}`}
                className="w-full flex flex-col md:flex-row md:gap-5 m-auto  p-4 border-b-2 border-gray-200 hover:bg-gray-200"
                // onClick={() => PortfolioPage(project.ProjectId)}
                key={index}
              >
                <img
                  alt="project"
                  className="block inset-0  w-[60vh]  md:h-52 object-cover object-center"
                  src={`/ProjectImages/${project.img1}`}
                />
                <div className="p-2  md:bg-transparent bg-[#00000093] md:bg-white opacity-100 ">
                  <h1 className="title-font  m-auto  font-medium md:font-bold text-center md:text-left md:text-lg md:text-black font-serif text-white">
                    {project.ProjectName}
                  </h1>
                  <p className="hidden md:block ">{project.ProjectDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
