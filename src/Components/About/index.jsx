import React from "react";

import AboutBorderInImage from "../AboutBorderInImage";
import BtnSecondary from "../Btn-Secondary";

const About = () => {
  return (
    <>
      <div className="container lg:flex-row min-[0px]:flex-col flex mx-auto  gap-20 px-[8%] lg:px-[5%] py-24 max-lg:justify-center">
        <AboutBorderInImage />
        <div className="">
          <h1 className="text-3xl font-bold">HAQQIMIZDA</h1>
          <div className="border-2 border-secondry w-[10%] mb-5 mt-5"></div>
          <p className="w-[80%] ">
            Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis heyəti
            ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın ən önəmli
            sahələrindən biri olan infrastruktur sektorunda daim yeniliklərə,
            inkişafa önəm vermişik.
          </p>
          <p className=" mt-10 w-[80%]">
            Bizim ən önəmli missiyamız yüksək keyfiyyətli tikinti və mühəndislik
            təcrübəmizdən istifadə edərək ən son texnikalarla müştərilərimizin
            etimadını qazanmaqdır.
          </p>
          <BtnSecondary />
        </div>
      </div>
    </>
  );
};

export default About;
