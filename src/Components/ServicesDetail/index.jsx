import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const URL = "http://localhost:3000/service/";
const ServicesDetail = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [serviceDetail, setServiceDetail] = useState({});
  const { sId } = useParams();
  const endPoint = `http://localhost:3000/service/${sId}`;
  useEffect(() => {
    axios
      .get(endPoint)
      .then(({ data }) => {
        setServiceDetail(data);
      })
      .catch(() => {
        console.log("Salam Qadan ALIM");
      });
  }, [sId]);

  return (
    <>
      <div className="container px-[3%] mx-auto">
        <div className="flex gap-5 mt-14">
          <div className="w-[65%] ">
            <div className="w-[100%]">
              <img className="" src={serviceDetail?.detailimage} alt="Saalm" />
            </div>
            <p className="mt-10">{serviceDetail?.descriptions}</p>
            <p className="mt-10">{serviceDetail?.descriptionmini}</p>
            <p className="mt-10">{serviceDetail?.descriptions}</p>
            <p className="mt-10">{serviceDetail?.escriptionmini}</p>
          </div>
          <div className="w-[33%]  flex flex-col  bg-grayBack">
            <div className="flex w-full h-[7%] hover:text-white p-8  hover:bg-brand items-center gap-5">
              <img
                className=" fill-current text-white "
                src={serviceDetail?.image}
                alt=""
              />
              <h1 className="text-2xl  font-semibold">
                {serviceDetail?.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetail;
