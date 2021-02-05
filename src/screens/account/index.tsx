import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import withObservables from '@nozbe/with-observables';
import {ListItem, Icon, Avatar} from 'react-native-elements';

interface Props {
  amount: Number;
  note: String;
}

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

const Account: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Avatar
        rounded
        size="large"
        containerStyle={{margin: 30}}
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />

      {list.map((item, i) => (
        <ListItem key={i} bottomDivider style={{width: '100%'}}>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

const style = StyleSheet.create({});

export default Account;
