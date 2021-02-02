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
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import 'react-native-gesture-handler';
import {Button, ThemeProvider} from 'react-native-elements';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ThemeProvider>
          <Button title="Hey!" />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
