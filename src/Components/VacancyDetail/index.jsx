import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
const URL = "http://localhost:3000/vacancy/";
const VacancyDetail = () => {
  const [vacancyDetail, setVacancyDetail] = useState([]);
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setVacancyDetail(data);
    });
  }, []);
  const count = vacancyDetail.length;
  return (
    <>
      <div className="container px-[3%] mx-auto mt-10">
        <div>
          <div>
            <h1 className="text-3xl font-bold mb-5">Açıq vakansiyalar</h1>
            <p>{count} vakansiya</p>
          </div>
          {vacancyDetail.length &&
            vacancyDetail.map(
              ({
                id,
                title,
                startDate,
                endDate,
                salary,
                age,
                education,
                experiencs,
                requests,
              }) => {
                return (
                  <div className="bg-grayBack mt-10 mb-10 p-10 w-[100%] lg:w-[70%]  border shadow-md rounded-md">
                    <div className="flex justify-between">
                      <h2 className="text-2xl font-bold">{title}</h2>
                      <Link
                        to={`/vacancies/${id}`}
                        className="flex items-center bg-brand px-4 py-2 text-white rounded-md"
                      >
                        Müraciət et
                        <IoIosArrowForward />
                      </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row  gap-16 mt-5 border-b border-gray-500 w-full lg:w-[75%] border-opacity-30">
                      <div key={id} className="flex flex-col gap-y-2">
                        <p>{startDate}</p>
                        <p>{endDate}</p>
                        <p>{salary}</p>
                      </div>
                      <div className="flex flex-col gap-y-2 mb-7 ">
                        <p>{age}</p>
                        <p>{education}</p>
                        <p>{experiencs}</p>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div>
                        <h3 className="text-xl font-semibold">Tələblər</h3>
                      </div>
                      <div className="mt-5">
                        <ul className="flex flex-col gap-y-2">
                          {requests.map((requests) => {
                            return (
                              <li className="flex items-center">
                                <TbPointFilled />
                                {requests}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </>
  );
};

export default VacancyDetail;
