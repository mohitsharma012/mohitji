import React, { useState, useEffect } from "react";



export default function ProjecPage({ id, ProjectsDatabase }) {
    // Initialize state variables with empty strings
    const [projectData, setProjectData] = useState({
        ProjectName: "",
        ProjectDescription: "",
        ProjectSkills: "",
        GitLink: "",
        LiveLink: "",
        img1: "",
        img2: "",
        img3: "",
    });

    useEffect(() => {
        // Find the project with the given ID and update state variables
        const project = ProjectsDatabase.find(
            (project) => project.ProjectId === id
        );
        if (project) {
            setProjectData(project);
        }
    }, [id, ProjectsDatabase]);

    return (
        <>
            <header className="IndexHeader p-relative m-auto w-100" style={{ minHeight: '50vh', height: '50vh', backgroundPosition: 'center' }}>
                <div className="d-flex m-auto w-100">

                    <h2 className=" pt-28 m-auto fs-1 purple tittle z-1">
                        {projectData.ProjectName}
                    </h2>
                </div>
                <div className="overlay" style={{ backgroundImage: 'linear-gradient(to top, #fff 0%, rgb(105 90 166 / 0%) 99%, rgb(105 90 166 / 42%) 100%)', height: '52%' }}></div>


            </header>

            <section className="bg-white ">
                <div className="container w-75 ">
                    <div className="row py-4">
                        <section className="col ">
                           

                        {projectData.img1 && <img className="m-1 img-thumbnail" src={require(`../ProjectImages/${projectData.img1}`)} alt="" />}
                        {projectData.img2 && <img className="m-1 img-thumbnail" src={require(`../ProjectImages/${projectData.img2}`)} alt="" />}
                        {projectData.img3 && <img className="m-1 img-thumbnail" src={require(`../ProjectImages/${projectData.img3}`)} alt="" />}



                        </section>
                        <section className="col d-flex flex-column py-5 ">
                            <a
                                className="fs-3 my-2 purple mx-auto tittle text-decoration-none"
                                target="_blank"
                                href={projectData.GitLink}
                            >
                                Click Here to see Code (GitHub)
                            </a>
                            <a
                                className="fs-3 my-2 purple mx-auto tittle text-decoration-none"
                                target="_blank"
                                href={projectData.LiveLink}
                            >
                                Click Here to see Live Preview (Hosted)
                            </a>
                            <div className="mx-4 my-5">
                                <span className="row my-3" >
                                    <b>
                                        Description :

                                    </b>
                                    {projectData.ProjectDescription}
                                </span>
                                <span className="row my-3 ">
                                    <b>Sills:</b>
                                    {projectData.ProjectSkills}

                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}
