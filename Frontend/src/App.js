import React, {useState} from 'react';
import "./App.css"; // adds css from app.css

// importing different components from components folder
import Navbar from  "./Components/Navbar.js";
import IndexHeader from  "./Components/IndexHeader.js";
import IndexMain from  "./Components/IndexMain.js";
import Footer from  "./Components/footer.js"
import ProjecPage from './Components/ProjectPage.js';

// Adding Database file from components folder 
import ProjectsDatabase from "./Components/ProjectsDatabase.js"

function App() {
  
  // State variables to manage visibility and selected portfolio ID
  const [showIndex, setshowIndex] = useState(true); // Whether to show the index page
  const [showPortfolioPage, setshowPortfolioPage] = useState(false); // Whether to show the portfolio page
  const [selectedPortfolioId, setSelectedPortfolioId] = useState(null); // ID of the selected portfolio


  // Important variable to Declare Used in website 
  var Site = { 
    SiteName : "MohitJi" , 
    
  };

  // Function to handle showing the portfolio page
  const PortfolioPage = (id) => {
    setshowIndex(false); // Hides Index Page Components 
    setshowPortfolioPage(true); // Shows Portfolio Page Components 
    setSelectedPortfolioId(id);  // Saves the id of project to show
  }
  
  return (
    <>
      {/* Navbar component */}
      <Navbar SiteName={Site.SiteName} />
      
      {/* Show IndexHeader only if showIndex state is true */}
      { showIndex && (<IndexHeader/>)}
      
      {/* Show IndexMain only if showIndex state is true */}
      { showIndex && (<IndexMain ProjectsDatabase = {ProjectsDatabase} PortfolioPage = {PortfolioPage} />)}
      
      {/* Show ProjectPage if showPortfolioPage state is true */}
      { showPortfolioPage && (<ProjecPage id={selectedPortfolioId} ProjectsDatabase={ProjectsDatabase} />)}
      
      {/* Footer component */}
      <Footer/>
    </>
  );
}

export default App;
