import React from "react";
import { useHistory } from "react-router-dom";
import CourtImg from "../assets/court.jpg";
const Home = () => {
  return (
    <div className="home-wrapper">
      <img className="home-image" src={CourtImg} alt="Inside cour house" />
    </div>
  );
};
export default Home;
