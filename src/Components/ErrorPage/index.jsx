import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ErrorPage = () => {
  return (
    <>
      <div className=" flex flex-col justify-center  gap-y-16 items-center mt-16">
        <div>
          <h1 className="text-2xl font-semibold">
            Axtardığınız Səhifə Tapılmadı
          </h1>
        </div>
        <div>
          <img src="/Error/Error.svg" alt="" />
        </div>
        <div className="flex items-center border-2 px-6 rounded-md mb-10 py-2 border-brand">
          <IoIosArrowBack className="text-brand " />
          <Link to="/" className="text-brand font-semibold">
            Əsas səhifəyə qayıt
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
