/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React from 'react';
 import {StrictMode} from 'react';
 import {Provider} from 'react-redux';
 import App from './App';
 import { store } from './redux/store';
 import MuiTheme from './theme/MuiTheme';
 import { createRoot } from "react-dom/client";
 
 const rootElement = document.getElementById("root");
 const root = createRoot(rootElement);
 
 root.render(
   <StrictMode>
     <Provider store={store}>
       <MuiTheme>
         <App />
       </MuiTheme>
     </Provider>
   </StrictMode>
 )
 
 
 /* ReactDOM.render(
   <StrictMode>
     <Provider store={store}>
       <MuiTheme>
         <App />
       </MuiTheme>
     </Provider>
   </StrictMode>,
   document.getElementById('root')
 ); */
 