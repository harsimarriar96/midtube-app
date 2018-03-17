import React from 'react';
import {} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

const logo = require('./assets/logo.png');

import Splash from './screens/Splash';
import Home from './screens/Home';

export default StackNavigator({
  Splash: {
    screen: Splash,
  },
  Home: { screen: Home }
});