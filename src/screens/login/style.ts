import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05405b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  containerInput: {
    width: '90%',
    backgroundColor: '#465881',
    justifyContent: 'center',
    borderRadius: 25,
    height: 50,
    marginBottom: 5,
    padding: 20,
    borderBottomWidth: 0,
  },
  containerOutInput: {
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#f75c5e',
    width: 200,
    borderRadius: 25,
    height: 50,
    padding: 20,
  },
  ContainerHeaderText: {
    marginVertical: 20,
  },
  containerText: {marginTop: 30},
  text: {color: '#fff'},
});
