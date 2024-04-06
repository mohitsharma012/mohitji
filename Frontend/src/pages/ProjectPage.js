import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";

export default function ProjectPage({ ProjectsDatabase }) {
  const [ProjectName, setProjectName] = useState(null);
  const [ProjectDescription, setProjectDescription] = useState(null);
  const [ProjectSkills, setProjectSkills] = useState(null);
  const [ProjectGitLink, setProjectGitLink] = useState(null);
  const [ProjectLiveLink, setProjectLiveLink] = useState(null);
  const [ProjectImg1, setProjectImg1] = useState(null);
  const [ProjectImg2, setProjectImg2] = useState(null);
  const [ProjectImg3, setProjectImg3] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const projectId = parseInt(id, 10);

    const foundProject = ProjectsDatabase.find(
      (project) => project.ProjectId === projectId
    );

    if (foundProject) {
      setProjectName(foundProject.ProjectName);
      setProjectSkills(foundProject.ProjectSkills);
      setProjectDescription(foundProject.ProjectDescription);
      setProjectGitLink(foundProject.GitLink);
      setProjectLiveLink(foundProject.LiveLink);
      setProjectImg1(foundProject.img1);
      setProjectImg2(foundProject.img2);
      setProjectImg3(foundProject.img3);
    }
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <>
      <div className="bg-black fixed  block h-36 w-full md:h-20">
        <Navbar />
      </div>
      <main>
        <section className="flex flex-col sm:flex-row pt-40 lg:p-24">
          <div className="flex flex-col lg:w-1/2 p-4 gap-5">
            <img
              className="m-auto "
              src={`../ProjectImages/${ProjectImg1}`}
              alt="img"
            />
            <img
              className="m-auto"
              src={`../ProjectImages/${ProjectImg2}`}
              alt="img"
            />
            <img
              className="m-auto"
              src={`../ProjectImages/${ProjectImg3}`}
              alt="img"
            />
          </div>

          <div className="flex flex-col p-4 lg:w-1/2  ">
            <div className="m-auto lg:px-2 lg:mt-12 text-lg flex flex-col gap-5">
              <h1 className=" text-2xl lg:text-5xl text-center	lg:mb-10 font-bold font-mono">{ProjectName}</h1>

              <span className="">
                {" "}
                <span className="font-bold ">Skills : </span> {ProjectSkills}{" "}
              </span>

              <p className="text-justify">
                <span className="font-bold ">Description : </span>{" "}
                {ProjectDescription}
              </p>

              <div className="flex flex-col w-60 lg:w-[70vh] lg:mt-12 m-auto gap-5 mb-16">
                <a
                  href={ProjectGitLink}
                  target="_blank"
                  className="text-2xl  border-2  py-1 rounded-lg font-mono text-center hover:bg-cyan-400"
                >
                  {" "}
                  Git Link
                </a>
                <a
                  href={ProjectLiveLink}
                  target="_blank"
                  className="text-2xl border-2 py-1 rounded-lg font-mono text-center hover:bg-cyan-400"
                >
                  {" "}
                  Live Preview{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
