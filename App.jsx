import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AfterLogin from "./components/AfterLogin/MainContainer";
import MainContainer from "./components/AfterLogin/MainContainer";
import RewardsPage from "./components/Reward/RewardPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/afterlogin",
    element: <MainContainer/>
  },
  {
    path: "/reward",
    element: <RewardsPage/>
  },
]);

const App = () => {
  const onlyWidth = useWindowWidth();

  return (
    <div className="">
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default App;
