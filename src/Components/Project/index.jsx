import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const URL = "http://localhost:3000/projects?_limit=4";
const Project = () => {
  const [projectsImg, setProjectsImg] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setProjectsImg(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="py-12 relative bg-ProjectBackImg mx-auto max-sm:-top-2 w-[100%] h-[100%] bg-cover">
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-80"></div>

        <div className="container mx-auto px-[3%] relative">
          <div className=" flex justify-between mx-auto">
            <div>
              <h1 className="text-3xl font-bold text-white">LAYİHƏLƏR</h1>

              <div className="border-2 border-secondry mt-5 max-sm:mt-2 w-[35%] rounded-md"></div>
            </div>

            <div>
              <button className="flex justify-center items-center border border-secondry text-white px-9 py-2 rounded">
                <Link className="max-sm:text-xs" to="/projects">
                  Hamısı
                </Link>

                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="900j0">
            {projectsImg.length &&
              projectsImg.map(({ id, image, title }) => {
                return (
                  <div key={id} className="gap-4 relative group mt-16">
                    <div className="flex ">
                      <img
                        src={image}
                        alt=""
                        className="bg-gradient-to-t  brightness-100 z-20 group-hover:z-0 w-full"
                      />
                      <div className=" absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
                    </div>

                    <div className="  w-full absolute bottom-0 z-10 px-2 pb-2 transition-all duration-1000 group-hover:-translate-y-6 group-hover:z-20">
                      <h3 className="text-white  text-xl  w-[90%] brightness-100 ">
                        {title}
                      </h3>

                      <Link
                        to={`/projects/${id}`}
                        className="flex items-center   text-secondry"
                      >
                        Ətraflı
                        <IoIosArrowForward />
                      </Link>
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

export default Project;
