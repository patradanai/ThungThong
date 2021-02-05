import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {styles} from './style';
import {Input, Icon, Button} from 'react-native-elements';
import Modal from 'react-native-modal';

const Noted = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleOverlay}>
        <View style={[styles.containerInput, {height: 45}]}>
          <View style={styles.dateIcon}>
            <Icon name="list" type="font-awesome" size={25} />
          </View>
          <View style={styles.containerText}>
            <Text style={{color: '#bcbcbc', fontSize: 18}}>Note</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        testID={'note'}
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
            <Text h4>Noted</Text>
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

export default Noted;
