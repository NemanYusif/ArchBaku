import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const URL = "https://arch-baku-json.vercel.app/service/";
const ServicesDetail = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [serviceDetail, setServiceDetail] = useState({});
  const { sId } = useParams();

  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      const currentService = data.find((s) => s.id == sId);
      setServiceDetail(currentService);
      setServiceDetails(data);
    });
  }, [sId]);
  return (
    <>
      <div className="container px-[3%] mx-auto">
        <div className="flex-col flex lg:flex-row gap-5 mt-14 ">
          <div className="lg:w-[65%]  w-full">
            <div className="w-[100%]">
              <img className="" src={serviceDetail?.detailimage} alt="Saalm" />
            </div>
            <p className="mt-10">{serviceDetail?.description}</p>
            <p className="mt-10">{serviceDetail?.descriptionmini}</p>
            <p className="mt-10">{serviceDetail?.description}</p>
            <p className="mt-10">{serviceDetail?.descriptionmini}</p>
          </div>
          <div className="lg:w-[33%] w-full h-[100%] flex flex-col shadow-md  bg-grayBack">
            {serviceDetails.map(({ image, title, id }) => {
              return (
                <div
                  key={id}
                  className="flex w-full h-6 p-8  hover:bg-white border-b border-opacity-20 border-gray-800"
                >
                  <Link
                    className="flex items-center gap-5"
                    to={`/servicedetails/${id}`}
                  >
                    <img
                      className=" fill-current text-white "
                      src={image}
                      alt=""
                    />
                    <span className="text-2xl  font-semibold">{title}</span>
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

export default ServicesDetail;
