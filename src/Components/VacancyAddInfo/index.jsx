import { IoIosArrowForward } from "react-icons/io";

const VacancyAddInfo = () => {
  return (
    <>
      <div className="bg-grayBack p-10 mt-14">
        <div className="mx-auto w-full lg:w-[45%] ">
          <div className="border-b border-gray-600   border-opacity-40">
            <h2 className="text-xl font-semibold mb-5">Məlumatlar</h2>
          </div>
          <div className="bg-inputColor lg:p-10 mt-5 mb-10 rounded-md">
            <div className=" flex flex-col lg:flex-row md:flex-row gap-5 w-full">
              <div className="flex w-full flex-col">
                <label htmlFor="">Adınız*</label>
                <input className="w-full h-10 rounded-md mt-2" type="text" />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="">Soyadınız*</label>
                <input className="w-full h-10 rounded-md mt-2" type="text" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row gap-5 w-full items-center mt-5">
              <div className="flex flex-col  w-full ">
                <label htmlFor="">Cinsiniz*</label>
                <select className="w-full h-10 rounded-md mt-2">
                  <option value="">Kisi</option>
                  <option value="">Qadin</option>
                </select>
              </div>
              <div className="flex flex-col  w-full ">
                <label htmlFor="">Doğum tarixi**</label>
                <input
                  type="date"
                  className="w-full h-10 rounded-md mt-2"
                  placeholder="Gün-Ay-İl"
                />
              </div>
              <div className="flex flex-col  w-full ">
                <label htmlFor="">İş təcrübəsi**</label>
                <select className="w-full h-10 rounded-md mt-2">
                  <option value="">1 Il</option>
                  <option value="">2 Il</option>
                </select>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row md:flex-row gap-5 w-full mt-5">
              <div className="flex w-full flex-col">
                <label htmlFor="">Telefon**</label>
                <input className="w-full h-10 rounded-md mt-2" type="text" />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="">Email**</label>
                <input className="w-full h-10 rounded-md mt-2 *:" type="text" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex justify-center mt-14">
            <button
              className="bg-brand px-8 py-3 rounded-md text-white flex items-center"
              type="submit"
            >
              Göndər <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VacancyAddInfo;
