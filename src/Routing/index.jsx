import React from "react";
import { Routes, Route } from "react-router";
import { MyRoutes } from "../MyRoutes";

const Routing = () => {
  return (
    <div>
      <Routes>
        {MyRoutes.map(({ id, path, element, title }) => {
          return <Route key={id} path={path} element={element} title={title} />;
        })}
      </Routes>
    </div>
  );
};

export default Routing;
