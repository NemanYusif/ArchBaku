import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { IoIosHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { FaNewspaper } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";

const MobilBar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  return (
    <>
      <React.Fragment>
        <div onClick={toggleDrawer(true)}>
          <MenuIcon style={{ fontSize: "xx-large" }} />
        </div>
        <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 350,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <div className=" flex justify-center mb-5">
                <img src="/Header/Logo.svg" alt="" />
              </div>
              <div className="flex flex-col text-3xl gap-6 p-3 text-brand">
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-x-105  "
                  to="/"
                >
                  <IoIosHome className="text-brand text-4xl" /> Əsas səhifə
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-105 "
                  to="/aboutus"
                >
                  <FaCircleInfo className="text-brand text-4xl" />
                  Haqqımızda
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-105 "
                  to="/projects"
                >
                  <IoIosDocument className="text-brand text-4xl" />
                  Layihələr
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-105 "
                  to="/services"
                >
                  <MdOutlineDesignServices className="text-brand text-4xl" />
                  Xidmətlər
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-105 "
                  to="/vacancy"
                >
                  <HiDocumentArrowDown className="text-brand text-4xl" />{" "}
                  Vakansiyalar
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex gap-3 transform translate-x-0 duration-300 hover:scale-105 "
                  to="/news"
                >
                  <FaNewspaper className="text-brand text-4xl" /> Xəbərlər
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex gap-3 transform translate-x-0 duration-300 hover:scale-105"
                  to="/contact"
                >
                  <MdPermContactCalendar className="text-brand text-4xl" />{" "}
                  Əlaqə
                </NavLink>
              </div>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default MobilBar;
