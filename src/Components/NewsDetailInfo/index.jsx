import React from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const NewsDetailInfo = () => {
  const { nId } = useParams();
  const [newsDetail, setNewsDetail] = useState({});
  const [newsDetails, setNewsDetails] = useState([]);
  const endpoints = [
    `http://localhost:3000/news/${nId}`,
    "http://localhost:3000/news/?_limit=6",
  ];
  useEffect(() => {
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        setNewsDetail(data[0].data);
        setNewsDetails(data[1].data);
      })
      .catch((err) => {
        console.log("Ala Qasqaldag Ne eldun");
      });
  }, [nId]);

  return (
    <>
      return (
      <>
        <div className="container px-[3%] mx-auto w-full">
          <div className="flex flex-col lg:flex-row mt-10 gap-10">
            <div className="w-[100%]">
              <div className="w-full">
                <div
                  style={{ width: "100%", height: "calc(0.3*100vw)" }}
                  className="w-full"
                >
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url={newsDetail?.youtube}
                  />
                </div>
              </div>
              <div className="flex mt-10 mb-10">
                <h1 className="text-3xl font-bold text-black">Layihənin adı</h1>
              </div>
              <div className="w-[100%]">
                <p className="mb-10">{newsDetail?.description}</p>
                <p>{newsDetail?.descriptionmini}</p>
              </div>
              <div className="flex gap-3 mt-10 mb-10">
                <img className="w-[90%]" src={newsDetail?.detailImg} alt="" />
                <img
                  className="w-[90%] h-full"
                  src={newsDetail?.detailImg}
                  alt=""
                />
              </div>
              <div className="w-[100%]">
                <p className="mb-5">{newsDetail?.description}</p>
                <p className="mb-16">{newsDetail?.descriptionmini}</p>
              </div>
            </div>
            <div className="w-full lg:w-[50%]">
              <div>
                <h1 className="text-xl font-bold text-brand">
                  Digər layihələr
                </h1>
              </div>
              {newsDetails.map(({ id, detailImg }) => {
                return (
                  <div className=" mt-5" key={id}>
                    <div className="flex items-center">
                      <Link to={`/projects/${id}`} className="w-[90%]">
                        <img src={detailImg} alt="" />
                      </Link>
                      <h2 className="text-base font-bold">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                      </h2>
                    </div>
                    <div className="border mt-5"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
      );
    </>
  );
};

export default NewsDetailInfo;
