import React, {useState} from 'react';
import {View, TouchableOpacity, Platform, SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';
import moment from 'moment';
import {styles} from './style';
import {Input, Icon, Button} from 'react-native-elements';
import Modal from 'react-native-modal';

// SubModal
import CurrenyModal from '../currency';
import Category from '../category';
import CalendarPicker from '../calendarpicker';
import Wallet from '../wallet';
const AddTransaction = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date(new Date()));

  // Toggle Modal
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // Onchnage Date
  const onChangeDate: any = (
    event: React.ChangeEvent<HTMLInputElement>,
    selectedDate: Date,
  ) => {
    const currentDate = selectedDate || new Date();
    setShowCalendar(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const stateCalendar = (event: React.ChangeEvent) => {
    setShowCalendar(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        buttonStyle={styles.button}
        type="outline"
        icon={<Icon name="add" size={20} color="#fff" />}
        onPress={toggleOverlay}
      />

      <Modal
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        swipeDirection={['right', 'down']}
        propagateSwipe={true}
        style={{margin: 0}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#eaeaea',
          }}>
          <View style={styles.headerSheet}>
            <TouchableOpacity onPress={toggleOverlay}>
              <Icon name="close" />
            </TouchableOpacity>
            <Text style={{fontFamily: 'PalanquinDark-Bold', fontSize: 20}}>
              Add Transaction
            </Text>
            <TouchableOpacity>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentSheet}>
            <View style={styles.containerInput}>
              <CurrenyModal />
              <Input
                placeholder="Amount"
                keyboardType="number-pad"
                containerStyle={{width: '100%', height: 50}}
              />
            </View>
            <View style={styles.containerInput}>
              <Category />
            </View>
            <TouchableOpacity onPress={stateCalendar}>
              <View style={[styles.containerInput, {height: 45}]}>
                <View style={styles.dateIcon}>
                  <Icon name="calendar-o" type="font-awesome" size={25} />
                </View>
                <View style={styles.containerText}>
                  <Text style={{color: '#000', fontSize: 18}}>
                    {moment(date).format('dddd, DD MMMM YYYY')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.containerInput}>
              <Wallet />
            </View>
            <View style={styles.containerInput}>
              <TouchableOpacity onPress={stateCalendar}>
                <View style={styles.dateIcon}>
                  <Icon name="list" type="font-awesome" size={25} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <CalendarPicker
        show={showCalendar}
        date={date}
        onChangeDate={onChangeDate}
      />
    </SafeAreaView>
  );
};

export default AddTransaction;
