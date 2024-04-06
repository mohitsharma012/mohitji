import React from "react";
import Navbar from "../Components/Navbar";

export default function AboutPage() {
  return (
    <>
      <div className="bg-black fixed  block h-36 w-full md:h-20">
        <Navbar />
      </div>
      {/* index header section  */}

      <section className=" min-h-80 md:min-h-[28rem] IndexHeaderBackground flex">
        <div className="md:mx-52 m-auto mx-10 flex flex-col gap-1 md:gap-7">
          <h3 className="text-gray-300  md:text-7xl pt-28 md:pt-14 text-5xl font-bold font-mono francois-one-regular">
            About Me
          </h3>
          <p className="text-gray-400 text-base md:text-lg ">
            {" "}
            <a href="/">Home</a> / <a href="/about">About Me</a>{" "}
          </p>
        </div>
      </section>
      <section className="flex pt-10">
        <div className="m-auto md:w-4/6 w-11/12 font-serif text-lg">
          <p>
            Hey there! I'm <b>Mohit Sharma</b> , a dedicated full-stack web
            developer based in Delhi, India. With a knack for both front-end and
            back-end technologies, I specialize in creating dynamic and robust
            web applications that leave a lasting impression.
          </p>
          <h1 className="font-bold mt-6 mb-2">My Journey</h1>
          <p>
            My journey into the world of web development started with a passion
            for problem-solving and a fascination with how websites come
            together. Since then, I've immersed myself in mastering a wide range
            of programming languages, frameworks, and tools, allowing me to
            tackle projects from every angle.
          </p>
          <h1 className="font-bold mt-6 mb-2">What Drives Me</h1>
          <p>
            What truly drives me is the opportunity to turn ideas into reality
            and build solutions that make a tangible impact. Whether it's
            crafting intuitive user interfaces, optimizing database performance,
            or architecting scalable back-end systems, I thrive on the challenge
            of creating seamless digital experiences.
          </p>
          <h1 className="font-bold mt-6 mb-2">My Approach</h1>
          <p>
            I take a holistic approach to development, combining creativity with
            technical expertise to deliver results that exceed expectations. By
            staying up-to-date with the latest industry trends and leveraging
            best practices, I ensure that every project I undertake is executed
            with precision and excellence.
          </p>
          <h1 className="font-bold mt-6 mb-2">Beyond Coding</h1>
          <p>
            While coding is my passion, there's more to me than just lines of
            code. Outside of work, you'll often find me exploring new
            technologies, attending tech meetups, or contributing to open-source
            projects. I believe in the importance of continuous learning and
            pushing the boundaries of what's possible.
          </p>
          <h1 className="font-bold mt-6 mb-2">Let's Connect</h1>
          <p>
            Whether you're looking to collaborate on a project, brainstorm new
            ideas, or simply geek out over all things tech, I'm always up for a
            chat. Feel free to reach out via email, phone, or connect with me on
            social media. Let's work together to bring your vision to life!
          </p>
        </div>
      </section>
    </>
  );
}
