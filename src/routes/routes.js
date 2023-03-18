import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import React from 'react';
import CountPageMemoized from "../views/count";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/count",
    element: <CountPageMemoized />
  }
]);
