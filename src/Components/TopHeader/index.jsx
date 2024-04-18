import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <>
      <div className="bg-banner">
        <div className="bg-brand opacity-90 ">
          <div className="container mx-auto w-full  px-[3%] flex py-3 justify-center md:justify-between">
            <div className=" hidden md:flex gap-12 text-white text-sm">
              <div className="flex justify-center items-center gap-2 font-Roboto">
                <MdOutlinePhoneInTalk />
                <p>+994 51 987 65 43</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <AiOutlineMail />
                <p>info@archbaku.az</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <CiLocationOn />
                <p>Bakı, Azərbaycan</p>
              </div>
            </div>
            <div className="flex text-white gap-5 text-xl">
              <Link
                to="https://www.facebook.com/"
                className="hover:scale-105 duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.instagram.com/"
                className="hover:scale-105 duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://az.linkedin.com/"
                className="hover:scale-105 duration-300"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://web.whatsapp.com/"
                className="hover:scale-105 duration-300"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
