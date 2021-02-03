import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {styles} from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppSceen, RootStackParams} from '../../route';

type ScreenProps = StackNavigationProp<RootStackParams, AppSceen.registor>;

interface LoginScreenProps {
  navigation: ScreenProps;
}

const Registor: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ContainerHeaderText}>
        <Text h1>Ledger</Text>
      </View>
      <Input
        placeholder="Full Name"
        placeholderTextColor="#003f5c"
        inputContainerStyle={styles.containerInput}
        containerStyle={styles.containerOutInput}
      />
      <Input
        placeholder="Email"
        placeholderTextColor="#003f5c"
        inputContainerStyle={styles.containerInput}
        containerStyle={styles.containerOutInput}
      />
      <Input
        placeholder="Password"
        placeholderTextColor="#003f5c"
        inputContainerStyle={styles.containerInput}
        containerStyle={styles.containerOutInput}
      />
      <Input
        placeholder="Confirm Password"
        placeholderTextColor="#003f5c"
        inputContainerStyle={styles.containerInput}
        containerStyle={styles.containerOutInput}
      />
      <Button title="Create account" buttonStyle={styles.buttonStyle} />
      <View style={styles.containerText}>
        <Text style={{color: '#fff'}}>Already got an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(AppSceen.login)}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registor;
