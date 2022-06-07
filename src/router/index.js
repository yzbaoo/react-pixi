import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'; 
import routers from './config'

export default () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {
            routers.map((v) => {
              const C = lazy(v.component);
              return <Route exact key={v.path} path={v.path} element={<C />} />
            })
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
