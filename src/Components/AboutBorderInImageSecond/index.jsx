import React from "react";

const AboutBorderInImageSecond = () => {
  return (
    <>
      <div
        className="w-[100%] h-[100%] before:md-w-[100%] relative z-0 before:content-[''] before:border before:border-brand  before:absolute before:z-0 before:w-[100%] before:h-[100%] before:left-[-30px] before:top-[-30px]
         after:content-[''] after:border after:border-brand after:absolute after:z-0 after:w-[100%] after:h-[100%] after:right-[-30px] after:bottom-[-30px]"
      >
        <img
          src="/About/AboutSecond.svg"
          alt=""
          className="w-[100%] relative z-10  "
        />
      </div>
    </>
  );
};

export default AboutBorderInImageSecond;
