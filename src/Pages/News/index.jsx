import React from "react";
import TopHeader from "../../Components/TopHeader";
import Header from "../../Components/Header";
import NewsBanner from "../../Components/NewsBanner";
import NewsDetail from "../../Components/NewsDetail";
import Footer from "../../Components/Footer";

const News = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <NewsBanner />
      <NewsDetail />
      <Footer />
    </>
  );
};

export default News;
