import * as React from 'react'
import { Navigate } from 'react-router-dom'

import Home from "./pages/Home";

export default [
  /* 작성 요령
  {
    name: "Insert Route Name",
    path: "/",
    Component: Insert Component Name,
    element: <>Insert JSX</>
  }
  */
  {
    name: "홈",
    path: "/",
    Component: Home,
  },
];