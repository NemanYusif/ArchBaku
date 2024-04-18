import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const Connect = () => {
  return (
    <>
      <div className="bg-connectBack relative mx-auto w-full h-full py-12 bg-cover">
        <div className="container mx-auto px-[3%] mt-6">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-black ">Əlaqə</h1>
            <div className="border-2  border-secondry mt-5 max-sm:mt-2 w-[3.5%] rounded-md"></div>
          </div>
          <div className="flex justify-center mt-12">
            <h2 className="text-3xl font-semibold">Suallarınız var?</h2>
          </div>

          <div className="">
            <div className="lg:flex md:flex   mt-3 gap-10 ">
              <div className=" flex flex-col  gap-y-8  border-r-2 border-opacity-40 border-gray-500 w-12/12 lg:w-4/12 max-sm:border-hidden">
                <div className="flex items-center gap-8 ">
                  <div className="border-2 p-3 border-brand rounded-md items-center ">
                    <FiPhoneCall className="text-brand font-bold text-2xl" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-brand">Telefon</h3>
                    <p className="opacity-70">+994 51 987 65 43</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="border-2 p-3 rounded-md items-center border-brand">
                    <AiOutlineMail className="text-brand font-bold text-2xl" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-brand">Email</h3>
                    <p className="opacity-70">info@archbaku.az</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="border-2 p-3 rounded-md items-center border-brand">
                    <CiLocationOn className="text-brand font-bold text-2xl" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-brand">Ünvan</h3>
                    <p className="opacity-70">Bakı, Azərbaycan</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-12/12  lg:w-8/12 mt-7">
                <div className="flex flex-col pr-5 justify-between gap-2 w-full md:w-5/12">
                  <input
                    type="text"
                    placeholder="Adınız və Soyadınız"
                    className="w-full py-4 px-4 rounded-md  shadow-md"
                  />
                  <input
                    type="text"
                    placeholder="Email ünvanı"
                    className="w-full py-4 px-4 rounded-md  shadow-md"
                  />
                  <input
                    type="text"
                    placeholder="Telefon nömrəsi"
                    className="w-full py-4 px-4 rounded-md shadow-md"
                  />
                </div>

                <div className="flex flex-col mt-3 lg:mt-0 lg:pl-5  w-full md:w-7/12">
                  <textarea
                    type="text"
                    placeholder="Mesajınız"
                    className="p-5 flex-grow shadow-md"
                  />
                  <button className="flex w-fit items-center text-white mt-4 bg-secondry px-8 py-3 rounded-lg">
                    Göndər <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
