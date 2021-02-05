import React, {useState} from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {Text} from 'react-native-elements';
import {styles} from './style';
import {Input, Icon, Button} from 'react-native-elements';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Category = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleOverlay} activeOpacity={0.1}>
        <View style={[styles.containerInput, {height: 55}]}>
          <View style={styles.button}></View>
          <View style={styles.containerText}>
            <Text style={{color: '#bcbcbc', fontSize: 18}}>Category</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        testID={'category'}
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

export default Category;
