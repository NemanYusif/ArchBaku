import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Inputs from "../../Components/Inputs";

const ContactIcons = () => {
  return (
    <>
      <div className="bg-connectBack relative mx-auto w-full h-full py-12 bg-cover">
        <div className="container md:block lg:block flex-col mx-auto px-[3%] mt-6">
          <div className="lg:flex md:flex  justify-center   mt-3 ">
            <div className=" md:flex lg:flex  md:justify-center lg:justify-center  gap-8  w-12/12 lg:w-12/12">
              <div className="flex items-center  gap-8 ">
                <div className="border-2 p-3 border-brand rounded-md items-center ">
                  <FiPhoneCall className="text-brand font-bold text-2xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-brand">Telefon</h3>
                  <p className="opacity-70 ">+994 51 987 65 43</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="border-2 p-3 rounded-md items-center border-brand">
                  <AiOutlineMail className="text-brand font-bold text-2xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-brand">Email</h3>
                  <p className="opacity-70">info@archbaku.az</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="border-2 p-3 rounded-md items-center border-brand">
                  <CiLocationOn className="text-brand font-bold text-2xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-brand">Ünvan</h3>
                  <p className="opacity-70">Bakı, Azərbaycan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <div className=" text-brand text-2xl flex gap-3">
              <div className=" border-2 border-brand rounded-md p-1 hover:scale-125 duration-500   ">
                <Link to="https://www.facebook.com/">
                  <FaFacebookF />
                </Link>
              </div>
              <div className=" border-2 border-brand rounded-md p-1 hover:scale-125 duration-500">
                <Link to="https://www.instagram.com/">
                  <FaInstagram />
                </Link>
              </div>
              <div className=" border-2 border-brand rounded-md p-1 hover:scale-125 duration-500 ">
                <Link to="https://az.linkedin.com/">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className=" border-2 border-brand rounded-md p-1 hover:scale-125 duration-500">
                <Link to="https://web.whatsapp.com/">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold mt-16 flex justify-center">
          Bizimlə əlaqə saxlayın
        </div>
        <div className="flex justify-center mt-8">
          <Inputs />
        </div>
      </div>
    </>
  );
};

export default ContactIcons;
