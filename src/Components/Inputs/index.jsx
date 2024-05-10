import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Inputs = () => {
  return (
    <>
      <div className="flex flex-wrap w-12/12  lg:w-8/12 mt-7">
        <div className="flex flex-col pr-5 justify-between gap-2 w-full md:w-5/12">
          <input
            type="text"
            placeholder="Adınız və Soyadınız"
            className="w-full py-4 px-4 rounded-md  shadow-md"
          />
          <input
            type="text"
            placeholder="Email ünvanı"
            className="w-full py-4 px-4 rounded-md  shadow-md"
          />
          <input
            type="text"
            placeholder="Telefon nömrəsi"
            className="w-full py-4 px-4 rounded-md shadow-md"
          />
        </div>

        <div className="flex flex-col mt-3 lg:mt-0 lg:pl-5  w-full md:w-7/12">
          <textarea
            type="text"
            placeholder="Mesajınız"
            className="p-5 flex-grow shadow-md"
          />
          <button className="flex w-fit items-center text-white mt-4 bg-secondry px-8 py-3 rounded-lg">
            Göndər <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default Inputs;
