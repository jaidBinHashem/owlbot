import {init} from '@rematch/core';
import createRematchPersist from '@rematch/persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as models from './models';

const persistPlugin = createRematchPersist({
  version: 1,
  storage: AsyncStorage,
  throttle: 1000,
  blacklist: ['navigation'],
  timeout: null,
});

const store = init({
  state: {},
  models,
  plugins: [persistPlugin],
});

export default store;
