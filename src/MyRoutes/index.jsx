import React from "react";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Projects from "../Pages/Projects";
import Services from "../Pages/Services";
import Vacancy from "../Pages/Vacancy";
import News from "../Pages/News";
import Contact from "../Pages/Contact";
import ProjectsDetail from "../Pages/ProjectsDetail";
import ServiceDetails from "../Pages/ServiceDetails";
import Vacansies from "../Pages/Vacancies";

export const MyRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    title: "Home Page",
  },
  {
    id: 2,
    path: "/aboutus",
    element: <AboutUs />,
    title: "About US",
  },
  {
    id: 3,
    path: "/projects",
    element: <Projects />,
    title: "Projects",
  },
  {
    id: 8,
    path: "/projects/:pId",
    element: <ProjectsDetail />,
    title: "Projects Detail",
  },
  {
    id: 4,
    path: "/services",
    element: <Services />,
    title: "Servicec",
  },
  {
    id: 9,
    path: "/servicedetails/:sId",
    element: <ServiceDetails />,
    title: "Servise Details",
  },
  {
    id: 5,
    path: "/vacancy",
    element: <Vacancy />,
    title: "Vacancy",
  },
  {
    id: 10,
    path: "/vacancies/:jId",
    element: <Vacansies />,
    title: "Vacansies",
  },
  {
    id: 6,
    path: "/news",
    element: <News />,
    title: "News",
  },
  {
    id: 7,
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
];
