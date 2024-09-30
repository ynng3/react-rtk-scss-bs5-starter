import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import useAnchor from '../hooks/useAnchor';

import routes from '../routes';

function RouteComponent() {
  const anchor = useAnchor(); // useAnchor 훅 호출

  return (
    <>
      {/* Anchor('#' link) Component */}
      {anchor}

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
