import React from "react";
import FAQ from "../../FAQ/FAQ";
import Feature from "../../Feature/Feature";
import Review from "../../Review/Review";
import Services from "../../Services/Services";
import Slider from "../../Slider/Slider";

const Home = () => {
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <Services></Services>
      </div>
      <div>
        <Feature></Feature>
      </div>
      <div>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
