import React, { useEffect, useState } from "react";
import { BiAlarm } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
const URL = "http://localhost:3000/news/";
const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setNews(data);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);
  return (
    <>
      <div className="bg-newsBack py-12 relative bg-cover w-full h-full mx-auto">
        <div className="absolute top-0 bottom-0 rigth-0 left-0 bg-black opacity-80"></div>
        <div className="container px-[3%] mx-auto relative">
          <div className="">
            <h1 className="text-3xl font-bold text-black">XƏBƏRLƏR</h1>
            <div className="border-2 border-secondry mt-5 max-sm:mt-2 w-[5%] rounded-md"></div>
          </div>
          <div className="grid grid-cols-1 w-full gap-3 md:grid-cols-2 lg:grid-cols-4 ">
            {news.length &&
              news.map(({ id, image, title, description }) => {
                return (
                  <div key={id} className=" bg-white mt-10 shadow-lg ">
                    <img src={image} alt="" className="w-full" />
                    <div className="bg-white">
                      <div className=" flex items-center gap-x-2 px-4 py-3">
                        <BiAlarm className="text-brand" />
                        <p className="text-sm opacity-70">05.03.2022</p>
                      </div>
                      <div className="border boder-grey w-[90%] m-auto"></div>
                      <div className=" p-4  ">
                        <h3 className="font-bold text-base">{title}</h3>
                        <p className="text-md mt-1">{description}</p>
                        <Link
                          to="/news"
                          className="text-sm flex items-center text-brand gap-1 mt-2 font-bold"
                        >
                          Davamı <IoIosArrowForward />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex flex-col items-center">
            <Link
              className="flex items-center justify-center gap-1 bg-secondry rounded-md py-3 px-8 mt-14   text-white"
              to="/projects"
            >
              Hamısı
              <IoIosArrowForward className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
