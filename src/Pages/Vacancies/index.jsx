import React from "react";
import TopHeader from "../../Components/TopHeader";
import Header from "../../Components/Header";
import VacancyBanner from "../../Components/VacancyBanner";
import VacancyInformation from "../../Components/VacancyInformation";
import VacancyAddInfo from "../../Components/VacancyAddInfo";
import Footer from "../../Components/Footer";
const Vacansies = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <VacancyBanner />
      <VacancyInformation />
      <VacancyAddInfo />
      <Footer />
    </>
  );
};

export default Vacansies;
