import React from "react";
import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from 'react'
import { NotFound } from "./Pages/NotFound";
import { LoadingScreen } from "./Pages/LoadingScreen"


const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
     {React.createElement(Component, props)}
  </Suspense>
)

const DashBoardPlacementOfficer = Loadable(lazy(() => import("./Pages/PlacementOfficer/DashBoardPlacementOfficer").then(module => ({ default: module.DashBoardPlacementOfficer })) ));
const LoginPlacementOfficer = Loadable(lazy(() => import("./Pages/PlacementOfficer/LoginPlacementOfficer").then(module => ({ default: module.LoginPlacementOfficer })) ));

const Home = Loadable(lazy(() => import("./Components/PlacementOfficer/NavlinkPages/Home").then(module => ({ default: module.Home })) ));
const Candidates = Loadable(lazy(() => import("./Components/PlacementOfficer/NavlinkPages/Candidates").then(module => ({ default: module.Candidates })) ));
const Placements = Loadable(lazy(() => import("./Components/PlacementOfficer/NavlinkPages/Placements").then(module => ({ default: module.Placements })) ));
const Settings = Loadable(lazy(() => import("./Components/PlacementOfficer/NavlinkPages/Settings").then(module => ({ default: module.Settings })) ));
const Trainings = Loadable(lazy(() => import("./Components/PlacementOfficer/NavlinkPages/Trainings").then(module => ({ default: module.Trainings })) ));
const Announcements = Loadable(lazy(() => import("./Components/PlacementOfficer/NavlinkPages/Announcements").then(module => ({ default: module.Announcements })) ));


export const routes = [
  {
    path: '/',
    element: <LoginPlacementOfficer />
  },
  {
    path: 'dashboard',
    element: <DashBoardPlacementOfficer />,
    children: [
      { path: 'home', element: < Home/> },
      { path: 'candidates', element: <Candidates/> },
      { path: 'placements', element: <Placements/> },
      { path: 'announcements', element: <Announcements/> },
      { path: 'trainings', element: <Trainings/> },
      { path: 'settings', element: <Settings/> },
    ],
  },
  {
    path: '*',
    element: <NotFound/>
  }  
];

const createBrowserRouter = BrowserRouter;

export default createBrowserRouter;
