import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// importing components
import { IndexComponent } from "./Components/IndexComponent";
import Footer from "./Components/Footer";

// Importing Pages
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import AboutPage from "./pages/AboutPage";
import ContactMePage from "./pages/ContactMePage";

// Importing databases file
import ProjectsDatabase from "./Components/ProjectsDatabase";

function App() {
  const [selectedproject, setselectedproject] = useState(null);

  function PortfolioPage(id) {
    setselectedproject(id);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <IndexComponent
                ProjectsDatabase={ProjectsDatabase}
                PortfolioPage={PortfolioPage}
              />
            }
          />
          <Route
            path="/project/:id"
            element={<ProjectPage ProjectsDatabase={ProjectsDatabase} />}
          />
          <Route path="/resume" element={<ResumePage />} />
          <Route
            path="/projects"
            element={<ProjectsPage ProjectsDatabase={ProjectsDatabase} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactMePage />} />

          {/* Add more routes for other pages */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;
