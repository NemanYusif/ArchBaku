import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BtnSecondary = () => {
  return (
    <>
      <button className="flex justify-center items-center border text-white bg-secondry px-9 py-2 rounded mt-10">
        <Link to="/aboutus">Ətraflı</Link>
        <IoIosArrowForward />
      </button>
    </>
  );
};

export default BtnSecondary;
