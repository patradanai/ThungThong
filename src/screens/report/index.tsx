import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import Calendar from '../../components/calendar';
interface Props {
  amount: Number;
  note: String;
}

const Report: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <SafeAreaView>
      <View>
        <Calendar />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default Report;
