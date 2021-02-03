import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {styles} from './style';

interface Props {
  name: string;
  date: Date;
  amount: number;
}

const Transaction: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardRow}>
        <View style={styles.borderImage}>
          <Image style={styles.image} source={require('../../images/mc.png')} />
        </View>
        <View style={styles.details}>
          <Text style={styles.textBold}>McDonald's</Text>
          <Text style={styles.textDate}>27 Dec</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.textPrice}>-$30</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;
