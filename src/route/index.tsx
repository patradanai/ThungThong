import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import {AppScreen} from './init';
// Component
import AddTransaction from '../components/addtransaction';
import Transaction from '../screens/transaction';
import Planing from '../screens/planing';
import Account from '../screens/account';
import Report from '../screens/report';

import Login from '../screens/login';
import Registor from '../screens/registor';
// Undefine for stack that mean dosen't have params

export type RootStackParams = {
  home: undefined;
  login: undefined;
  registor: undefined;
};

export type RootTabParams = {
  addtransaction: undefined;
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
        showLabel: false,
      }}>
      <Tab.Screen
        name="transaction"
        component={Transaction}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return (
                <Icon name="account-balance-wallet" color={color} size={25} />
              );
            } else {
              return <Icon name="attach-money" color={color} size={25} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="report"
        component={Report}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({color}) => (
            <Icon name="data-usage" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="addtransaction"
        component={Planing}
        options={{
          tabBarLabel: 'Plan',
          tabBarButton: () => <AddTransaction />,
        }}
      />
      <Tab.Screen
        name="planing"
        component={Planing}
        options={{
          tabBarLabel: 'Plan',
          tabBarIcon: ({color}) => <Icon name="flag" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" color={color} size={25} />
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
        <Stack.Navigator initialRouteName={AppScreen.home} headerMode="none">
          <Stack.Screen name={AppScreen.home} component={TabScreenHome} />
          <Stack.Screen name={AppScreen.login} component={Login} />
          <Stack.Screen name={AppScreen.registor} component={Registor} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  buttonAdd: {
    borderWidth: 2,
    borderRadius: 10,
    height: 30,
    backgroundColor: '#000',
  },
});

export default Routes;
