import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import AboutBorderInImage from "../AboutBorderInImage";
import AboutBorderInImageSecond from "../AboutBorderInImageSecond";

const AboutUsBanner = () => {
  return (
    <>
      <div className=" py-16  relative bg-aboutUsBanner mx-auto w-full h-full bg-cover">
        <div className="top-0 bottom-0 left-0 right-0 bg-brand absolute opacity-80"></div>
        <div className="container mx-auto px-[3%] relative">
          <div className="flex items-center gap-x-3">
            <div className="border-l-4  border-secondry h-7 rounded-md "></div>
            <h1 className="text-white font-bold text-2xl ">HAQQIMIZDA</h1>
          </div>
          <div className="flex gap-3 mt-5">
            <Link
              to="/"
              className="flex items-center text-white text-md opacity-60"
            >
              Əsas səhifə
              <IoIosArrowForward />
            </Link>
            <Link className="flex items-center text-white text-md">
              Haqqımızda
            </Link>
          </div>
        </div>
      </div>
      <div className="container lg:flex-row min-[0px]:flex-col flex mx-auto  gap-20 px-[8%] lg:px-[5%] py-24 max-lg:justify-center">
        <AboutBorderInImage />
        <div className="w-[100%]">
          <h1 className="text-3xl font-bold mb-8">Archbaku MMC</h1>
          <p className="w-[100%] text-md">
            Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis heyəti
            ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın ən önəmli
            sahələrindən biri olan infrastruktur sektorunda daim yeniliklərə,
            inkişafa önəm vermişik.
          </p>
          <p className=" mt-10 w-[100%] text-md">
            Bizim ən önəmli missiyamız yüksək keyfiyyətli tikinti və mühəndislik
            təcrübəmizdən istifadə edərək ən son texnikalarla müştərilərimizin
            etimadını qazanmaqdır.
          </p>
        </div>
      </div>
      <div className="container lg:flex-row min-[0px]:flex-col flex mx-auto  gap-20 px-[8%] lg:px-[5%] py-24 max-lg:justify-center">
        <div className="w-[100%]">
          <p className="w-[100%] text-md">
            Yüksək keyfiyyətli texnikalarımız sayəsində layihələrimizi vaxtında
            təhvil veririk. Xidmətlərimizə təmir, tikinti, qədim binaların
            bərpası, landşaft dizayn memarlıq, yeni tikililərin inşası daxildir.
          </p>
          <p className=" mt-10 w-[100%] text-md">
            Bizim əsas üstünlüyümüz müxtəlif həcmdəki layihələrdə çoxillik
            təcrübəyə malik olan ixtisaslaşmış peşəkar komandamızdır.
          </p>
        </div>
        <AboutBorderInImageSecond />
      </div>
    </>
  );
};

export default AboutUsBanner;
