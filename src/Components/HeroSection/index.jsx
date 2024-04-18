import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="relative z-0 ">
            <img
              className="mx-auto brightness-50"
              src="/HeroSection/BG-img.svg"
              alt=""
            />
            <div className="container mx-auto px-16 absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] ">
              <div className="flex flex-col gap-5 justify-center  text-white items-center">
                <h1 className="md:text-5xl  text-3xl text-center ">
                  LOREM IPSUM DOLOR SIT
                </h1>
                <p className=" w-1/2 h-20 text-center hidden md:block md:max-lg:hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  velit sem est ipsum leo consequat ornare. Justo sit lacus,
                  risus dictum. Nisi, quis orci viverra at quam porttitor et. Eu
                  cras imperdiet nisl, feugiat lectus mi.
                </p>
                <button className="flex justify-center items-center border-2 px-9 py-2 rounded">
                  <Link to="/aboutus">Ətraflı</Link>
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
