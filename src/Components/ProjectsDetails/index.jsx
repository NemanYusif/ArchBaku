import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const URL = "http://localhost:3000/projects/";
const URL2 = "http://localhost:3000/projects/?_limit=6";

const ProjectsDetails = () => {
  const { pId } = useParams();

  const endpoints = [
    `http://localhost:3000/projects/${pId}`,
    "http://localhost:3000/projects/?_limit=6",
  ];

  const [projectsDetail, setProjectsDetail] = useState({});
  const [projectsDetails, setProjectsDetails] = useState([]);

  useEffect(() => {
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        setProjectsDetail(data[0].data);
        setProjectsDetails(data[1].data);
      })
      .catch((err) => {
        console.log("Ala Qasqaldag Ne eldun");
      });
  }, [pId]);

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
                  url={projectsDetail?.youtube}
                />
              </div>
            </div>
            <div className="flex mt-10 mb-10">
              <h1 className="text-3xl font-bold text-black">Layihənin adı</h1>
            </div>
            <div className="w-[100%]">
              <p className="mb-10">{projectsDetail?.description}</p>
              <p>{projectsDetail?.descriptionmini}</p>
            </div>
            <div className="flex gap-3 mt-10 mb-10">
              <img className="w-[90%]" src={projectsDetail?.detailImg} alt="" />
              <img
                className="w-[90%] h-full"
                src={projectsDetail?.detailImg}
                alt=""
              />
            </div>
            <div className="w-[100%]">
              <p className="mb-5">{projectsDetail?.description}</p>
              <p className="mb-16">{projectsDetail?.descriptionmini}</p>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <div>
              <h1 className="text-xl font-bold text-brand">Digər layihələr</h1>
            </div>
            {projectsDetails.map(({ id, detailImg }) => {
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
};

export default ProjectsDetails;
