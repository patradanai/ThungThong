import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import withObservables from '@nozbe/with-observables';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import {useDatabase} from '@nozbe/watermelondb/hooks';

// Component

interface Props {
  transactions: any;
  database: any;
  navigation: any;
}

const Transaction: React.FC<Props> = ({transactions, navigation, database}) => {
  const db$ = useDatabase();
  const fetch = db$.collections.get('transactions');

  const addTransaction = async () => {
    await db$.action(async () => {
      const newTransaction: any = await fetch.create();
      // await newTransaction.addTransaction();
    });
  };

  return (
    <>
      <View style={{flex: 1}}></View>
    </>
  );
};

const style = StyleSheet.create({});

// const enchance = withObservables([], ({database}) => ({
//   transaction: database.collection,
// }));

export default Transaction;
