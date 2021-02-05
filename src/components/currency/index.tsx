import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {styles} from './style';
import {Input, Icon, Button} from 'react-native-elements';
import Modal from 'react-native-modal';

const AddTransaction = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Button
        buttonStyle={styles.button}
        type="outline"
        title="THB"
        onPress={toggleOverlay}
      />

      <Modal
        testID={'currency'}
        isVisible={visible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        swipeDirection={['right']}
        style={{margin: 0}}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={styles.headerSheet}>
            <TouchableOpacity onPress={toggleOverlay}>
              <Icon name="close" />
            </TouchableOpacity>
            <Text h4>Currency</Text>
            <TouchableOpacity>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
          <Text>Curre</Text>
        </View>
      </Modal>
    </View>
  );
};

export default AddTransaction;
