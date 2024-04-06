import React from "react";
import Navbar from "../Components/Navbar";


export default function ResumePage() {
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
      <div className="bg-black fixed  block h-36 w-full md:h-20">
        <Navbar />
      </div>
      <section className="flex flex-col md:pt-32 px-4 md:px-40 pt-52 pb-0 text-lg">
        <button onClick={downloadResume} className=" w-60 mb-8 text-white py-1 border-black bg-cyan-500 m-auto border hover:bg-cyan-600 ">Download Resume</button>
        <div className="m-auto flex w-full flex-col gap-7">
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-4xl mb-5 font-mono">Mohit Sharma</h1>
            <span>
              {" "}
              <a href="" className="text-cyan-600 underline	">
                {" "}
                stayer.mohit@gmail.com
              </a>{" "}
              | +91 9650432875{" "}
            </span>
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-bold ">EXPERIENCE</h1>
            <hr className=" border border-black" />

            <h1 className="font-bold ">
              Web Developer Internship | The Sparks Foundation
            </h1>
            <ul className="list-disc list-inside pl-3 md:pl-8">
              <li>
                Spearheaded the development of a sophisticated banking system
                project using Django and React, showcasing adeptness in modern
                web development technologies.
              </li>
              <li>
                Collaborated closely with a cross-fundamental team to design and
                implement features, ensuring seamless user experiences and
                robust functionalities.
              </li>
            </ul>
            <h1 className="font-bold ">Founder And Manager | DevilsPlanet</h1>
            <ul className="list-disc list-inside pl-3 md:pl-8">
              <li>
                Founded and managed the dynamic clothing brand “DevilsPlanet,”
                driving all aspects of brand development, from conceptualization
                to market penetration.
              </li>
              <li>
                Demonstrated exceptional leadership and strategic acumen in
                overseeing operations, resulting in exponential growth and brand
                recognition.
              </li>
              <li>
                Managed day-to-day business operations, including inventory,
                sales, customer relation, and financial management.
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-bold ">SKILLS</h1>
            <hr className=" border border-black" />

            <h1 className="font-bold md:flex gap-3">
              Programming Languages:{" "}
              <p className="font-normal">Python, JavaScript, HTML, CSS</p>
            </h1>
            <h1 className="font-bold md:flex gap-3">
              Framework & Libraries:{" "}
              <p className="font-normal">
                : Django, Express.js, React.js, Bootstrap
              </p>
            </h1>
            <h1 className="font-bold md:flex gap-3">
              Database Management:{" "}
              <p className="font-normal"> MySQL, SQLite, PostgreSQL, MongoDB</p>
            </h1>
            <h1 className="font-bold md:flex gap-3">
              Web Development:
              <p className="font-normal">
                Full-stack development, Responsive Design{" "}
              </p>
            </h1>
            <h1 className="font-bold md:flex gap-3">
              Version Control: <p className="font-normal"> Git, GitHub</p>
            </h1>
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-bold ">EDUCATION</h1>
            <hr className=" border border-black" />

            <ul className="list-disc list-inside pl-3 md:pl-8">
              <li>
                Computer Engineering (AIML) | Indraprastha Engineering Collage
              </li>
              <li>XII (CBSE) | Kendriya Vidyalaya NFC Vigyan Vihar</li>
            </ul>
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-bold ">ACADEMIC PROJECTS </h1>
            <hr className=" border border-black" />

            <ul className="list-disc list-inside pl-3 md:pl-8">
              <li className="font-bold ">
                AlleyBot – An AI Friend to talk with
                <p className="font-normal pl-6">
                  An AI-powered chatbot using Django, designed for realistic and
                  engaging conversations. Demonstrates proficiency in Python,
                  Django, and AI technologies. - Python, Django, Django REST
                  Framework, SQLite, HTML, CSS, JavaScript, OpenAI API
                </p>
              </li>
              <li className="font-bold ">
                RudeTrade – Intraday Trading Journal System{" "}
                <p className="font-normal pl-6">
                  An end-to-end Database portal for trade registration,
                  organizing information, and analyzing past trade data – MySQL,
                  Django (Python), JavaScript, HTML, CSS, Bootstrap
                </p>
              </li>
              <li className="font-bold ">
                DevilsPlanet – E-commerce Store for Clothing Brand
                <p className="font-normal pl-6">
                  An E-commerce platform for a clothing brand, facilitating
                  online sales and showcasing a range of clothing products –
                  MySQL, Django (Python), JavaScript, HTML, CSS.
                </p>
              </li>
              <li className="font-bold ">
                VoteX – Blockchain-Based Online Voting System
                <p className="font-normal pl-6">
                  A secure online voting platform leveraging Ethereum,
                  JavaScript, and Python (Django) for tamper-proof records, user
                  authentication, and stringent security measures.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-bold ">CERTIFICATIONS</h1>
            <hr className=" border border-black" />
            <div className="pl-3 md:pl-8">
              <p>Python (Basic) | HackerRank</p>
              <p>
                Data Science Expert with Python Django Tutorial | SimpliLearn
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
