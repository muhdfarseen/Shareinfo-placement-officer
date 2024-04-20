import { BrowserRouter } from "react-router-dom";
import { DashBoardPlacementOfficer } from "./Pages/PlacementOfficer/DashBoardPlacementOfficer";
import { LoginPlacementOfficer } from "./Pages/PlacementOfficer/LoginPlacementOfficer";
import { NotFound } from "./Pages/NotFound";

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
)


export const routes = [
  {
    path: "/",
    element: <LoginPlacementOfficer />
  },
  {
    path: "dashboard",
    element: <DashBoardPlacementOfficer />,
    children: [
      { path: "home", element: <></> },
      { path: "candidates", element: <></> },
      { path: "placements", element: <></> },
      { path: "announcements", element: <></> },
      { path: "trainings", element: <></> },
      { path: "settings", element: <></> },
    ],
  },
  {
    path: '*',
    element: <NotFound/>
  }  
];

const createBrowserRouter = BrowserRouter;

export default createBrowserRouter;
