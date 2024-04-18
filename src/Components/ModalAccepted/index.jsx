import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

const ModalAccepted = ({ onCloseAccepted }) => {
  return (
    <>
      <div className="w-full h-dvh fixed inset-0 flex items-center justify-center z-50">
        <div
          onClick={onCloseAccepted}
          className="absolute inset-0 bg-black bg-opacity-50 z-[-1]"
        ></div>
        <div className="py-5 pb-12 px-5  absolute z-10   bg-white rounded-md left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[100%] lg:w-[40%]  md:w-[60%] gap-y-7 flex flex-col">
          <div onClick={onCloseAccepted} className="flex justify-end">
            <IoClose className="text-2xl cursor-pointer" />
          </div>
          <div className="flex justify-center">
            <img src="/ModalAccepted/modal.svg" alt="" />
          </div>
          <div className="items-center flex flex-col ">
            <h2 className="font-bold text-2xl">Təşəkkür edirik!</h2>
            <h2 className="font-bold text-2xl">Sorğunuz qəbul edildi.</h2>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-sm lg:text-xl md:text-xl">
              Ən qısa zaman ərzində sizinlə əlaqə saxlayacayıq.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

ModalAccepted.propTypes = {
  onCloseAccepted: PropTypes.func,
};

export default ModalAccepted;
