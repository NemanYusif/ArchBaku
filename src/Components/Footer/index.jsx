import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <div className="bg-footerimg relative mx-auto py-12 bg-cover h-full w-full">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-brand w-full h-full opacity-90"></div>
        <div className="container relative px-[3%] mx-auto ">
          <div className="  gap-y-8 grid grid-cols-1 w-full justify-items-center md:grid-cols-2 lg:grid-cols-3">
            <div className=" flex flex-col items-center lg:items-start md:items-start gap-y-9 ">
              <div>
                <Link to="/">
                  <img src="/Footer/logo.svg" alt="" />
                </Link>
              </div>
              <div>
                <p className="text-white  w-[100%] lg:w-[90%] md:w-[90%] text-center lg:text-start md:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  velit sem est ipsum leo consequat ornare. Justo sit lacus,
                  risus dictum.
                </p>
              </div>
              <div className=" text-white text-xl flex gap-3">
                <div className=" border-2 border-white rounded-md p-1 hover:scale-125 duration-500   ">
                  <Link to="https://www.facebook.com/">
                    <FaFacebookF />
                  </Link>
                </div>
                <div className=" border-2 border-white rounded-md p-1 hover:scale-125 duration-500">
                  <Link to="https://www.instagram.com/">
                    <FaInstagram />
                  </Link>
                </div>
                <div className=" border-2 border-white rounded-md p-1 hover:scale-125 duration-500 ">
                  <Link to="https://az.linkedin.com/">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className=" border-2 border-white rounded-md p-1 hover:scale-125 duration-500">
                  <Link to="https://web.whatsapp.com/">
                    <FaWhatsapp />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center lg:items-start md:items-start">
                <h1 className="text-2xl font-bold text-white">
                  Saytın xəritəsi
                </h1>
                <div className="border-2 border-secondry mt-2 mb-5 max-sm:mt-2 w-[20%] rounded-md"></div>
              </div>
              <div className="flex gap-10">
                <div className="text-xl flex flex-col gap-y-3 gap-x-10">
                  <Link
                    to="/"
                    className="flex gap-1 text-white items-center  hover:text-secondry"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Əsas səhifə
                  </Link>
                  <Link
                    to="/aboutus"
                    className="flex gap-1 text-white items-center  hover:text-secondry"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Haqqımızda
                  </Link>
                  <Link
                    to="/projects"
                    className="flex gap-1 text-white items-center  hover:text-secondry"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Layihələr
                  </Link>
                  <Link
                    to="/services"
                    className="flex gap-1 text-white items-center  hover:text-secondry"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Xidmətlər
                  </Link>
                </div>
                <div className="text-xl flex flex-col gap-3">
                  <Link
                    to="/vacancy"
                    className="flex gap-1 text-white items-center hover:text-secondry"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Vakansiyalar
                  </Link>
                  <Link
                    to="/news"
                    className="flex gap-1 text-white items-center  hover:text-secondry"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Xəbərlər
                  </Link>
                  <Link
                    to="/contact"
                    className="flex gap-1 text-white items-center  hover:text-secondry"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Əlaqə
                  </Link>
                </div>
              </div>
            </div>
            <div className="justify-items-center  flex flex-col gap-y-2">
              <div className="flex flex-col items-center lg:items-start md:items-start">
                <h1 className="text-2xl font-bold text-white">Son layihələr</h1>
                <div className="border-2 border-secondry mt-2 mb-5 max-sm:mt-2 w-[15%] rounded-md"></div>
              </div>
              <div className="flex gap-x-2 ">
                <Link>
                  <img
                    className="hover:-translate-y-2 duration-300"
                    src="/Footer/footer1.svg"
                    alt=""
                  />
                </Link>
                <Link>
                  <img
                    className="hover:-translate-y-2 duration-300"
                    src="/Footer/footer2.svg"
                    alt=""
                  />
                </Link>
                <Link>
                  <img
                    className="hover:-translate-y-2 duration-300"
                    src="/Footer/footer3.svg"
                    alt=""
                  />
                </Link>
                <Link>
                  <img
                    className="hover:-translate-y-2 duration-300"
                    src="/Footer/footer4.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex gap-2">
                <Link>
                  <img
                    className="hover:-translate-y-2 duration-300"
                    src="/Footer/footer5.svg"
                    alt=""
                  />
                </Link>
                <Link>
                  <img
                    className="hover:-translate-y-2 duration-300"
                    src="/Footer/footer6.svg"
                    alt=""
                  />
                </Link>
                <Link>
                  <img
                    className="hover:-translate-y-2 duration-300"
                    src="/Footer/footer7.svg"
                    alt=""
                  />
                </Link>
                <Link>
                  <img
                    className="hover:-translate-y-2 duration-300"
                    src="/Footer/footer8.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="border border-white w-full  opacity-40"></div>
            <div className="flex justify-between  text-white mt-5">
              <p>© 2022 Archbaku.az. Müəllif hüquqları qorunur</p>
              <p>Site by JEDAI</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
