import ts from 'typescript';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
// Component

import Transaction from '../screens/transaction';
import Planing from '../screens/planing';
import Account from '../screens/account';
import Report from '../screens/report';

import Login from '../screens/login';
import Registor from '../screens/registor';
// Undefine for stack that mean dosen't have params

export enum AppSceen {
  home = 'home',
  login = 'login',
  registor = 'registor',
}

export type RootStackParams = {
  home: undefined;
  login: undefined;
  registor: undefined;
};

export type RootTabParams = {
  transaction: undefined;
  report: undefined;
  planing: undefined;
  account: undefined;
};

const Stack = createStackNavigator<RootStackParams>();
const Tab = createBottomTabNavigator<RootTabParams>();

const TabScreenHome = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#F34C56',
        inactiveTintColor: '#CBCBCB',
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {marginTop: 5},
      }}>
      <Tab.Screen
        name="transaction"
        component={Transaction}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color}) => (
            <Icon name="account-balance-wallet" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="report"
        component={Report}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({color}) => (
            <Icon name="data-usage" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="planing"
        component={Planing}
        options={{
          tabBarLabel: 'Plan',
          tabBarIcon: ({color}) => <Icon name="flag" color={color} size={35} />,
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={AppSceen.login} headerMode="none">
          <Stack.Screen name={AppSceen.home} component={TabScreenHome} />
          <Stack.Screen name={AppSceen.login} component={Login} />
          <Stack.Screen name={AppSceen.registor} component={Registor} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
