import React from "react";

import TheBestOnline from "./The-Best-Online-Learning-App/TBOLA";
import HowItWorks from "./How-It-Works/HIT";
import Benefits from "./Benefits/Benefits";
import GlobalLearning from "./Global-Learning-Community/GLC";
import BestFeatures from "./Best-Features/BF";
import LatestCourses from "./8000+-Latest-Courses/8LC";
import Digital from "./UI/digital"
import Testimonial from "./Testimonials/TestiMo";
import ExpertAgent from "./Expert-Agent/EA";
import BlogNNews from "./Blog-&-News/BnN";

function landingPage() {
  return (
    <div className="">
      <TheBestOnline />
      <HowItWorks />
      <Benefits />
      <GlobalLearning />
      <BestFeatures />
      <LatestCourses />
      <Digital />
      <Testimonial />
      <ExpertAgent />
      <BlogNNews />
    </div>
  );
}

export default landingPage;
