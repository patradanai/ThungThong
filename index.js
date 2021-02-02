/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import {database} from './src/model/index';

const myApp = () => (
  <DatabaseProvider database={database}>
    <App />
  </DatabaseProvider>
);

AppRegistry.registerComponent(appName, () => myApp);
