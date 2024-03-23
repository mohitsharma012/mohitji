import React, { useState, useEffect } from "react";

export default function Navbar({ SiteName }) {
    // State variables for background color and padding top
    const [bgColor, setBgColor] = useState("transparent");
    const [paddingTop, setPaddingTop] = useState("20px"); // Initial padding top
    const [TextColor, setTextColor] = useState("white");
    const [TextHoverColor, setTextHoverColor] = useState("black")

    // useEffect to handle scroll event and update background color and padding top
    useEffect(() => {
        const handleScroll = () => {
            // Change background color and padding top based on scroll position
            if (window.scrollY > 100) {
                setBgColor("white");
                setPaddingTop("0px"); // Change padding top
                setTextColor("black");
                setTextHoverColor("black")
            } else {
                setBgColor("transparent");
                setPaddingTop("2vh"); // Reset padding top
                setTextColor("white")
            }
        };

        // Add event listener when component mounts
        window.addEventListener("scroll", handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // useEffect to save background color and padding top to localStorage
    useEffect(() => {
        localStorage.setItem("bgColor", bgColor);
        localStorage.setItem("paddingTop", paddingTop);
    }, [bgColor, paddingTop]);

    return (
        <>
            {/* Navbar component */}
            <nav
                className="navbar navbar-expand-lg w-100 z-2"
                style={{
                    backgroundColor: bgColor,
                    paddingTop: paddingTop,
                    transition: "background-color 0.3s, padding-top 0.3s",
                }}
            >
                <div className=" container-fluid w-auto">
                    {/* Navbar brand */}
                    <a className=" fs-1 tittle nav-item navbar-brand " style={{color: TextColor, pointer:'cursor'}}  href="/">
                        {SiteName}
                    </a>
                    {/* Navbar Items shows when click on Btn */}
                    <div className="position-absolute  z-1">
                        <div
                            className="collapse collapse-horizontal"
                            id="collapseWidthExample"
                        >
                            {/* Navbar links */}
                            <ul className="navbar-nav ms-53 " >
                                <li className="nav-item " >
                                    <a
                                        className="nav-link tittle white"
                                        style={{color: TextColor}}
                                        
                                        aria-current="page"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a
                                        className="nav-link tittle white"
                                        style={{color: TextColor}}
                                        aria-current="page"
                                        href="/#scrollspyHeading2"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a
                                        className="nav-link tittle white"
                                        style={{color: TextColor}}
                                        aria-current="page"
                                        href="/#scrollspyHeading3"
                                    >
                                        Portfolio
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a
                                        className="nav-link tittle white"
                                        style={{color: TextColor}}
                                        aria-current="page"
                                        href="/#scrollspyHeading4"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Button to toggle navbar collapse */}
                    <button
                        className="btn fs-2 NavbarMenuBtn "
                        type="button"
                        style={{color: TextColor}}
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseWidthExample"
                        aria-expanded="false"
                        aria-controls="collapseWidthExample"
                    >
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>
        </>
    );
}
