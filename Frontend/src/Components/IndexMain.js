import react, { useState } from "react";

// images importing
import IndexMainMenImg from '../images/man.png'




export default function IndexMain(props) {
  const { ProjectsDatabase, PortfolioPage } = props;



  return (
    <>
      <main >
        {/* this is about me section  */}
        <div className="container row m-auto mb-5  px-5" id="scrollspyHeading2">
          <section className="col-4  ">
            <img src={IndexMainMenImg} className="w-100" alt="man" />
          </section>
          <section className="col-8 align-items-center m-auto">
            <span>Who Am I ?</span>
            <h3 className="tittle purple fs-1">About Me</h3>
            <p>
              Greetings! I'm Mohit Sharma, a dedicated full-stack web developer
              with a fervent drive to create exceptional digital experiences.
              With extensive proficiency in Python, Django, and AIML, I
              specialize in crafting dynamic, user-centric websites and
              applications. Let's embark on a transformative journey together
              and turn your visions into remarkable online realities! With a
              keen eye for detail and a commitment to excellence, I'm here to
              ensure that your digital presence exceeds expectations. Let's
              collaborate and bring your ideas to life in the most impactful and
              innovative way possible!
            </p>
          </section>
        </div>
        {/* this is portfolio section  */}
        <div
          className="container row"
          id="scrollspyHeading3"
          style={{ margin: "17vh auto" }}
        >
          <span className="text-center">What I Did ?</span>
          <h3 className="tittle text-center purple  fs-1">
            Portfolio <span className="align-middle">View All</span>
          </h3>
          <div className=" m-auto d-flex gap-3 container row justify-content-center">
            {ProjectsDatabase.map((project, index) => (
              <div
                className="image-container col-4"
                onClick={() => PortfolioPage(project.ProjectId)}
              >
                <img
                  src={require(`../ProjectImages/${project.img1}`)}

                  alt={project.ProjectName}
                  className="Portfolioimage"
                />
                <div className="overlayText font-weight-bold ">
                  {project.ProjectName}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* this is social section  */}
        <div
          className="container-fluid my-5 p-3 bg-purple "
          id="scrollspyHeading4"
        >
          <div className="container  row m-auto p-4" style={{ width: "99vh" }}>
            <section className="white tittle col  ">
              <h4 className=" m-0">My Social Links</h4>
              <p className="white m-0 font-family-times fw-light opacity-75">
                Always feel Free to Contact & Hire me
              </p>
            </section>
            <section className="col">
              <div className="mt-1">
                <a
                  href="https://www.linkedin.com/in/mohit-sharma-22b16a296/"
                  target="_blank"
                  className="text-white w-auto fs-3 icon-border mx-2 social-btn"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/mohitsharma012"
                  target="_blank"
                  className="text-white w-auto fs-3 icon-border  social-btn"
                >
                  <i class="fa-brands fa-git"></i>
                </a>
                <a
                  href="https://www.instagram.com/_.mohit_012/"
                  target="_blank"
                  className="text-white w-auto fs-3 icon-border mx-2 social-btn"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBXHRDNjNFhRnvCxpZwqkDppsLmvTrZKbzdTNXcDJvCQxJcXfQVlKmWJnmmxCHhgBfnGZ"
                  target="_blank"
                  className="text-white w-auto fs-3 icon-border mx-2 social-btn"
                >
                  <i class="fa-solid fa-envelope"></i>
                </a>
                <a
                  href="https://wa.me/+919650432875"
                  target="_blank"
                  className="text-white w-auto fs-3 icon-border mx-2 social-btn"
                >
                  <i class="fa-brands fa-whatsapp"></i>{" "}
                </a>
              </div>
            </section>
          </div>
        </div>
        {/* this is contact section  */}
        <div className="container row m-auto my-5" style={{ width: "99vh" }}>
          <span className="text-center">How can you communicate?</span>
          <h3 className="text-center purple tittle fs-1">Contact Me</h3>
          <div className="m-4">
            <form >
              <div className="row gap-3">
                <input
                  className="col m-0 form-control"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="col m-0 form-control"
                  type="text"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <textarea
                  className="row my-3 form-control"
                  name=""
                  id=""
                  rows="10"
                  placeholder="Write Something"
                ></textarea>
                <button
                  class="btn d-block bg-purple bg-purple-hover m-auto text-white my-4 fs-6 px-3 "
                  type="submit"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
