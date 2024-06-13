import React from "react";
import TopHeader from "../../Components/TopHeader";
import Header from "../../Components/Header";
import ContactIcons from "../../Components/ContactIcons";
import Footer from "../../Components/Footer";
import ContactBanner from "../../Components/ContactBanner";
import Maps from "../../Components/Maps";

const Contact = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <ContactBanner />
      <ContactIcons />
      <Maps />
      <Footer />
    </>
  );
};

export default Contact;
