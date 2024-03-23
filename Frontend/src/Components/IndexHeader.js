import React from 'react'
import IndexHeaderImg from '../images/index_headex.png'

export default function IndexHeader() {
    return (
        <>
            <div className="IndexHeader  " id="scrollspyHeading1">
                <div className='container d-flex m-auto h-100 row '>
                    <section className=' m-auto IndexheaderTitle col-5 z-1 tittle' >
                        <h1 className='fs-300 ' style={{ color: "#555" }} >Hi! <h1 className='fs-300 ' style={{ color: "#3d3c3c" }}  > I am Mohit </h1> </h1>
                        <h2 style={{
                            letterSpacing: 'calc(1px + (7 - 1) * ((100vw - 300px) / (1300 - 300)))',
                            opacity: 0.8,
                            color: "rgb(79 79 79)",
                            fontWeight: "100",
                            fontFamily: "Open Sans, sans-serif"
                        }}
                            className='fs-4'
                        >
                            FULLSTACK WEB DEVELOPER</h2>
                        <button class="btn bg-purple bg-purple-hover text-white my-4 fw-light fs-6 px-3 font-family-times" type="submit">Visit my Works</button>
                    </section>
                    <section className=' m-auto col-5 z-1 IndexHeaderImg'>
                        <img style={{ width: "70vh" }} src={IndexHeaderImg} alt="" />
                    </section>
                </div>
            </div>
            <div className="overlay"></div>


        </>
    )

}
