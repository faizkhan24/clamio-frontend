import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
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
