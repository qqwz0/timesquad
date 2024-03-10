import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container"> 
      <Main />
      </div>
    </div>
  );
};

export default Home;