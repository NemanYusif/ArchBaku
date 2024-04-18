import axios from "axios";
import React, { useEffect, useState } from "react";

const URL = "http://localhost:3000/colleagues/";
const Colleagues = () => {
  const [colleagues, setColleagues] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setColleagues(data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);
  return (
    <>
      <div className="relative py-12">
        <img
          src="/Colleagues/backCol.svg"
          alt=""
          className="left-0 top-0 absolute py-12"
        />
        <img
          src="/Colleagues/backCol2.svg"
          alt=""
          className="absolute right-0 top-0 py-12 "
        />
        <div className="container mx-auto px-[8%] mt-8">
          <div className=" items-center flex flex-col   ">
            <h1 className="text-3xl font-bold text-black">ƏMƏKDAŞLAR</h1>
            <div className="border-2 border-secondry mt-5 max-sm:mt-2 w-[5%] rounded-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-14 ">
            {colleagues.length &&
              colleagues.map(({ id, image, name, specialty, experience }) => {
                return (
                  <div
                    key={id}
                    className=" relative bg-brand mt-12 flex flex-col w-full "
                  >
                    <img src={image} alt="" className="w-full" />
                    <div className="flex flex-col items-center gap-y-1 text-white">
                      <img
                        src="/Colleagues/colback.svg"
                        alt=""
                        className="absolute object-cover w-full h-[17%] "
                      />
                      <h3 className="relative text-xl font-bold mt-1 ">
                        {name}
                      </h3>
                      <div className="flex flex-col items-center">
                        <p className=" relative">{specialty}</p>
                        <p className="text-sm relative mb-2">{experience}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Colleagues;
