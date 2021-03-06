/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/screens/app';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
