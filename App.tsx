/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {Button, ThemeProvider} from 'react-native-elements';
import Route from './src/route';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import database from './src/model/index';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <ThemeProvider>
      <DatabaseProvider database={database}>
        <Route />
      </DatabaseProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
