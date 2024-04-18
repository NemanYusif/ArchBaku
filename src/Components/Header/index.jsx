import React from "react";
import { Link } from "react-router-dom";
import MobilBar from "../MobilBar";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white w-full h-full ">
        <div className="container  mx-auto px-[3%]  ">
          <div className="py-3 md:flex justify-between items-center">
            <div className="flex items-center justify-between">
              <Link to="/">
                <div className="">
                  <img src="/Header/Logo.svg" alt="" id="logo" />
                </div>
              </Link>
              <div className="block  md:hidden ">
                <MobilBar />
              </div>
            </div>

            <div className="hidden  md:flex  md:text-sm lg:text-xl gap-5">
              <Link to="/" className="hover:text-brand ease-in duration-150">
                Əsas səhifə
              </Link>

              <Link
                to="/aboutus"
                className="hover:text-brand ease-in duration-150"
              >
                Haqqımızda
              </Link>

              <Link
                to="/projects"
                className="hover:text-brand ease-in duration-150"
              >
                Layihələr
              </Link>

              <Link
                to="/services"
                className="hover:text-brand ease-in duration-150"
              >
                Xidmətlər
              </Link>

              <Link
                to="/vacancy"
                className="hover:text-brand ease-in duration-150"
              >
                Vakansiyalar
              </Link>

              <Link
                to="/news"
                className="hover:text-brand ease-in duration-150"
              >
                Xəbərlər
              </Link>

              <Link
                to="/contact"
                className="hover:text-brand ease-in duration-150"
              >
                Əlaqə
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
