import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const ProjectBanner = () => {
  return (
    <>
      <div className=" py-16  relative bg-aboutUsBanner mx-auto w-full h-full bg-cover">
        <div className="top-0 bottom-0 left-0 right-0 bg-brand absolute opacity-80"></div>
        <div className="container mx-auto px-[3%] relative">
          <div className="flex items-center gap-x-3">
            <div className="border-l-4  border-secondry h-7 rounded-md "></div>
            <h1 className="text-white font-bold text-2xl ">LAYİHƏLƏR</h1>
          </div>
          <div className="flex gap-3 mt-5">
            <Link to="/" className="flex items-center text-white text-md opacity-60">
              Əsas səhifə
              <IoIosArrowForward />
            </Link>
            <Link className="flex items-center text-white text-md">
              Layihələr
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ProjectBanner;
