import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

const URL = "https://arch-baku-json.vercel.app/service/";

const Service = () => {
  const [servicec, setServicec] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setServicec(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="bg-serviceBackImg relative h-full py-12 w-full mx-auto bg-cover">
        <div className="container mx-auto px-[3%]">
          <div className=" mb-8">
            <h1 className="text-3xl font-bold text-black">XİDMƏTLƏR</h1>
            <div className="border-2 border-secondry mt-5 max-sm:mt-2 w-[5%] rounded-md "></div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3  ">
            {servicec.length &&
              servicec.map(({ id, title, image, descriptoin }) => {
                return (
                  <div
                    key={id}
                    className=" shadow-md w-full flex flex-col gap-y-5 brightness-100 bg-white p-8 hover:-translate-y-3 duration-300 border-b-4 border-transparent hover:border-b-4 hover:border-brand"
                  >
                    <img src={image} alt="" className="w-[20%]" />
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>{descriptoin}</p>
                    <Link
                      to={`/servicedetails/${id}`}
                      className="flex items-center text-brand font-medium gap-1 text-BASE"
                    >
                      Ətraflı
                      <IoIosArrowForward />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
