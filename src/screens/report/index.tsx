import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import Calendar from '../../components/calendar';
import TransactionCard from '../../components/transactionCard';
interface Props {
  amount: Number;
  note: String;
}

const Report: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1.1}}>
          <Calendar />
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              height: 40,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}>
            <Text style={{fontFamily: 'PalanquinDark-Bold', fontSize: 20}}>
              Transactions
            </Text>
          </View>
          <ScrollView>
            <TransactionCard />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default Report;
