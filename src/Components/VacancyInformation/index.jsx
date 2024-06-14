import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const URL = "https://arch-baku-json.vercel.app/vacancy/";

const VacancyInformation = () => {
  const [addInfo, setAddInfo] = useState({});
  const { jId } = useParams();

  useEffect(() => {
    axios.get(URL + jId).then(({ data }) => {
      setAddInfo(data);
    });
  }, [jId]);

  return (
    <>
      <div className="container px-[3%] mx-auto">
        <div>
          <div key={addInfo?.id} className="mt-10">
            <div>
              <h1 className="text-brand text-3xl font-bold">
                {addInfo?.title}
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row gap-14 mt-5">
              <div className="flex flex-col gap-2">
                <p>{addInfo?.startDate}</p>
                <p>{addInfo?.endDate}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>{addInfo?.salary}</p>
                <p>{addInfo?.age}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>{addInfo?.education}</p>
                <p>{addInfo?.experiencs}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VacancyInformation;
