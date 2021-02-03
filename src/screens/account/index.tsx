import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import withObservables from '@nozbe/with-observables';

interface Props {
  amount: Number;
  note: String;
}

const Account: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <>
      <View>
        <Text>{}</Text>
      </View>
      <Text>sdasdssssssssssssssssssssssssssssssssss</Text>
    </>
  );
};

const style = StyleSheet.create({});

export default Account;
