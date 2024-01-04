import React from "react";
import { Helmet } from 'react-helmet'
import { useSelector } from "react-redux";

import "./assets/scss/style.scss";

import RouteComponent from "./components/RouteComponent";

function App() {
  return (
    <>
      <Helmet>
        <title>React Starter(React + Typescript + Bootstrap + Redux Toolkit + Sass)</title>
      </Helmet>

      <RouteComponent />
    </>
  )
}

export default App;
