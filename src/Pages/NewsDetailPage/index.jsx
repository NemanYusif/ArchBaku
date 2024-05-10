import React from "react";
import TopHeader from "../../Components/TopHeader";
import Header from "../../Components/Header";
import NewsBanner from "../../Components/NewsBanner";
import NewsDetailInfo from "../../Components/NewsDetailInfo";
import Footer from "../../Components/Footer";

const NewsDetailPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <NewsBanner />
      <NewsDetailInfo />
      <Footer />
    </>
  );
};

export default NewsDetailPage;
