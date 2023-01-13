/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
import {
  Route, 
  BrowserRouter,
  Switch
} from 'react-router-dom';
import HomePage from './pages/home';
import InputsPage from './pages/inputs';

export default function App() {

  const routesElements = (
    <Route
        path="/"
        element={<InputsPage />}
      >
        <Route path='/Home' element={<InputsPage />}/>
        <Route path='/inputs' element={<HomePage />}/>
      </Route>
  )

  return (
    <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route path="/inputs">
            <InputsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        </Suspense>
        {/* <RouterProvider router={route} /> */}
      </BrowserRouter>
  );
}
