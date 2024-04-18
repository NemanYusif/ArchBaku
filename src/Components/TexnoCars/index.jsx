import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Modal from "../../Components/Modal";
import ModalAccepted from "../ModalAccepted";
import { useSelector, useDispatch } from "react-redux";
import { idChange } from "../../Slice";

const URL = "http://localhost:3000/Technique/";
const TexnoCars = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalAccepted, setOpenModalAccepted] = useState(false);
  const [techniques, setTechniques] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setTechniques(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="bg-texnoBackImg py-12 relative mx-auto w-full h-full bg-cover">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-85"></div>

        <div className="container mx-auto px-[3%] mt-10 relative">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">TEXNİKALAR</h1>
            <div className="border-2 border-secondry mt-5 max-sm:mt-2 w-[5%]  rounded-md"></div>
          </div>

          {openModal && (
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              setOpenModalAccepted={setOpenModalAccepted}
            />
          )}

          {openModalAccepted && (
            <ModalAccepted
              openModalAccepted={openModalAccepted}
              onCloseAccepted={() => setOpenModalAccepted(false)}
            />
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {techniques.length &&
              techniques.map(({ id, image, title }) => {
                return (
                  <div key={id}>
                    <div
                      className="mt-20"
                      onClick={() => {
                        setOpenModal(true);
                        dispatch(idChange(id));
                      }}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full cursor-pointer "
                      />

                      <div className="bg-white w-full flex  justify-center py-4">
                        <p className="cursor-pointer">{title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex flex-col items-center">
            <Link
              className="flex items-center justify-center gap-1 bg-secondry rounded-md py-3 px-8 mt-14   text-white"
              to="/projects"
            >
              Hamısı
              <IoIosArrowForward className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TexnoCars;
