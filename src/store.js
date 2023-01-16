/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {createStore} from 'redux';
import { globalReducer } from './reducers';

// Because this file is declared above both Modern and Legacy folders,
// we can import this from either folder without duplicating the object.
export const store = createStore(globalReducer());
