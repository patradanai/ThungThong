import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {styles} from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppSceen, RootStackParams} from '../../route';

type ScreenProps = StackNavigationProp<RootStackParams, AppSceen.login>;

interface LoginScreenProps {
  navigation: ScreenProps;
}

const Login: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ContainerHeaderText}>
        <Text h1>Ledger</Text>
      </View>
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
      <Button title="Get Started" buttonStyle={styles.buttonStyle} />
      <View style={styles.containerText}>
        <TouchableOpacity
          onPress={() => navigation.navigate(AppSceen.registor)}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
