import React from "react";
import TopHeader from "../../Components/TopHeader";
import Header from "../../Components/Header";
import ProjectBanner from "../../Components/ProjectBanner";
import ProjectsDetails from "../../Components/ProjectsDetails";
import Footer from "../../Components/Footer";

const ProjectsDetail = () => {
  return (
    <>
      <div>
        <TopHeader />
        <Header />
        <ProjectBanner />
        <ProjectsDetails />
        <Footer />
      </div>
    </>
  );
};

export default ProjectsDetail;
