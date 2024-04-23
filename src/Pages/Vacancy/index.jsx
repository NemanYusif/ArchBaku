import React from "react";
import TopHeader from "../../Components/TopHeader";
import Header from "../../Components/Header";
import VacancyBanner from "../../Components/VacancyBanner";
import VacancyDetail from "../../Components/VacancyDetail";
import Footer from "../../Components/Footer";

const Vacancy = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <VacancyBanner />
      <VacancyDetail />
      <Footer />
    </>
  );
};

export default Vacancy;
