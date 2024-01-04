import * as React from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'

import ScrollToAnchor from './scrollToAnchor';

import routes from '../routes';

function RouteComponent() {
  return (
    <>
      {/* Anchor('#' link) Component */}
      <ScrollToAnchor />

      {/* router */}
      <Routes>
        {routes.map((item: any, id: number) => (
          <Route
            key={id}
            path={item.path}
            Component={item.Component ? item.Component : null}
            element={item.element ? item.element : null}
          />
        ))}
      </Routes>
    </>
  )
}

export default RouteComponent;
