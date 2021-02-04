import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Button, Overlay} from 'react-native-elements';
import {styles} from './style';
import {Icon} from 'react-native-elements';

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
        icon={<Icon name="add" size={20} color="#fff" />}
        onPress={toggleOverlay}
      />

      <Overlay
        isVisible={visible}
        animationType="slide"
        onBackdropPress={toggleOverlay}
        fullScreen={true}>
        <View>
          <View style={styles.headerSheet}>
            <TouchableOpacity onPress={toggleOverlay}>
              <Icon name="close" />
            </TouchableOpacity>
            <Text h4>Add Transaction</Text>
            <TouchableOpacity>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
          <Text>Hello from Overlay!</Text>
        </View>
      </Overlay>
    </View>
  );
};

export default AddTransaction;
