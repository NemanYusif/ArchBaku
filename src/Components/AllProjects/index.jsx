import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useSearchParams } from "react-router-dom";
import Tapilmadi from "../Tapilmadi";
const URL = "http://localhost:3000/projects/";
const AllProject = () => {
  const [allProjectsImg, setAllProjectsImg] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search] = useSearchParams();

  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setAllProjectsImg(data);
      })
      .catch(() => {
        setAllProjectsImg("Netice Tapilmadi");
      });
  }, []);

  useMemo(() => {
    const cat = search.get("category");
    if (cat) {
      const filteredProjects = allProjectsImg.filter(
        (proj) => proj.category === cat
      );
      setFiltered(filteredProjects);
    } else {
      setFiltered(allProjectsImg);
    }
    const errMessage = () => {
      if (filteredProjects.length > 0) {
        setFiltered(allProjectsImg);
      } else {
        alert("Netice Tapilmadi");
      }
    };
  }, [allProjectsImg, search]);

  return (
    <>
      <div className="container mx-auto px-[3%]  ">
        <div className="lg:flex gap-3 lg:justify-center mt-10">
          <div className="flex gap-3 justify-center">
            <Link
              to={"/projects"}
              className="text-xl  hover:bg-linkback px-4 py-2 rounded-sm hover:text-brand  hover:-translate-y-1 duration-300 border-b-4 border-transparent hover:border-b-4 border-brand"
            >
              Hamısı
            </Link>
            <Link
              to={"/projects?category=Tikinti"}
              className="text-xl  hover:bg-linkback px-4 py-2 rounded-sm hover:text-brand  hover:-translate-y-1 duration-300 border-b-4 border-transparent hover:border-b-4 border-brand"
            >
              Tikinti
            </Link>
            <Link
              to={"/projects?category=Restavrasiya"}
              className="text-xl  hover:bg-linkback px-4 py-2 rounded-sm hover:text-brand  hover:-translate-y-1 duration-300 border-b-4 border-transparent hover:border-b-4 border-brand"
            >
              Restavrasiya
            </Link>
          </div>
          <div className="flex gap-3 justify-center">
            <Link
              to={"/projects?category=Lahiyelendirme"}
              className="text-xl  hover:bg-linkback px-4 py-2 rounded-sm hover:text-brand  hover:-translate-y-1 duration-300 border-b-4 border-transparent hover:border-b-4 border-brand"
            >
              Layihələndirmə
            </Link>
            <Link
              to={"/projects?category=Texnikaninicaresi"}
              className="text-xl  hover:bg-linkback px-4 py-2 rounded-sm hover:text-brand  hover:-translate-y-1 duration-300 border-b-4 border-transparent hover:border-b-4 border-brand"
            >
              Texnikanın icarəsi
            </Link>
          </div>
          <div className="flex gap-3 justify-center">
            <Link
              to={"/projects?category=Temir"}
              className="text-xl  hover:bg-linkback px-4 py-2 rounded-sm hover:text-brand  hover:-translate-y-1 duration-300 border-b-4 border-transparent hover:border-b-4 border-brand"
            >
              Təmir
            </Link>
            <Link
              to={"/projects?category=EksteryerveLandsaft"}
              className="text-xl  hover:bg-linkback px-4 py-2 rounded-sm hover:text-brand  hover:-translate-y-1 duration-300 border-b-4 border-transparent hover:border-b-4 border-brand"
            >
              Eksteryer və Landşaft
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap w-full  justify-center gap-5 mb-20">
          {filtered.length ? (
            filtered.map(({ id, image, title }) => {
              return (
                <div
                  key={id}
                  className="gap-4 w-full lg:w-[23%] md:w-[48%] relative group mt-16"
                >
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
                      className="flex items-center   text-secondry"
                      to={`/projects/${id}`}
                    >
                      Ətraflı
                      <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <Tapilmadi />
          )}
        </div>
      </div>
    </>
  );
};

export default AllProject;
