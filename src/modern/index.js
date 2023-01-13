/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import {store} from '../store';
import MuiTheme from './theme/MuiTheme';


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <MuiTheme>
        <App />
      </MuiTheme>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
