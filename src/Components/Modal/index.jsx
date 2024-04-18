import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const URL = "http://localhost:3000/Technique/";
const Modal = ({ onClose, setOpenModalAccepted }) => {
  const [inputValue, setOpenValue] = useState({
    fullname: "",
    phone: "",
    company: "",
  });

  const handleClick = () => {
    if (
      inputValue.fullname.trim() !== "" &&
      inputValue.phone.trim() !== "" &&
      inputValue.company.trim() !== ""
    ) {
      console.log("Doludur");
    } else {
      alert("Xanalari Doldurun");
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOpenValue((prev) => ({ ...prev, [name]: value }));
  };

  const newId = useSelector((state) => state.id.value);
  const [idTexno, setIdTexno] = useState({});
  useEffect(() => {
    axios
      .get(`${URL}${newId}`)
      .then(({ data }) => {
        setIdTexno(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-full h-dvh fixed inset-0 flex items-center justify-center z-50">
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black bg-opacity-50 z-[-1]"
        ></div>

        <div className="bg-white py-5 rounded-md pb-12 p-5 relative z-50 w-[90%] lg:w-[50%] md:w-[70%]">
          <div onClick={onClose} className="flex justify-end">
            <IoClose className="text-2xl cursor-pointer" />
          </div>
          <div className="lg:flex">
            <div className="flex w-full gap-3 mt-3">
              <div className="w-full flex flex-col gap-y-3">
                <img src={idTexno?.image} alt="" className="w-[90%]" />
                <div className="flex gap-x-3">
                  <img
                    src={idTexno?.image}
                    alt=""
                    className="w-[43%] brightness-50"
                  />
                  <img
                    src={idTexno?.image}
                    alt=""
                    className="w-[43%] brightness-50"
                  />
                </div>
              </div>
            </div>
            <div className="w-full gap-4 flex flex-col">
              <div className="flex">
                <h2 className="text-xl font-bold">Ekskavator JCB</h2>
              </div>
              <div className="flex flex-col ">
                <p className="font-bold text-sm">İcarə qiymət:</p>
                <div className="flex items-center gap-5">
                  <h2 className="text-xl font-bold text-brand">250 AZN/Gün</h2>
                  <div className="border-r border-gray-400 h-4 "></div>
                  <h2 className="text-xl font-bold text-brand ">6000 AZN/Ay</h2>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">Sifariş üçün formu doldurun</h3>
                <input
                  type="text"
                  placeholder="Adınız və Soyadınız*"
                  className="w-[90%] py-2 rounded-md px-3 border border-gray-500 border-opacity-20 shadow-md"
                  name="fullname"
                  value={inputValue.fullname}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Telefon nömrəsi*"
                  className="w-[90%] py-2 rounded-md px-3 border border-gray-500 border-opacity-20 shadow-md"
                  name="phone"
                  value={inputValue.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Şirkətinizin adı"
                  className="w-[90%] py-2 rounded-md px-3 border border-gray-500 border-opacity-20 shadow-md"
                  name="company"
                  value={inputValue.company}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-white">
                <button
                  type="submit"
                  onClick={() => {
                    onClose();
                    setOpenModalAccepted(true);
                    handleClick();
                  }}
                  disabled={
                    inputValue.fullname.trim() === "" ||
                    inputValue.phone.trim() === "" ||
                    inputValue.company.trim() === ""
                  }
                  className="flex justify-center   items-center bg-brand  px-7 py-2 rounded"
                >
                  Sifariş et
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
