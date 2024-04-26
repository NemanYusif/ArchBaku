import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const URL = "http://localhost:3000/vacancy/";
const VacancyInformation = () => {
  const [addInfo, setAddInfo] = useState([]);
  const [vacancyInfo, setVacancyInform] = useState({});
  const { jId } = useParams();
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      const currentVacancy = data.find((j) => j.id == jId);
      setVacancyInform(currentVacancy);
      setAddInfo(data);
      console.log(currentVacancy);
    });
  }, [jId]);

  return (
    <>
      <div className="container px-[3%] mx-auto">
        <div>
          {addInfo.length &&
            addInfo.map(
              ({
                id,
                title,
                startDate,
                endDate,
                salary,
                age,
                education,
                experiencs,
              }) => {
                return (
                  <div key={id} className="mt-10">
                    <div>
                      <h1 className="text-brand text-3xl font-bold">{title}</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex-row gap-14 mt-5">
                      <div className="flex flex-col gap-2">
                        <p>{startDate}</p>
                        <p>{endDate}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>{salary}</p>
                        <p>{age}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>{education}</p>
                        <p>{experiencs}</p>
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

export default VacancyInformation;
