import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05405b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput: {
    width: '90%',
    backgroundColor: '#465881',
    justifyContent: 'center',
    borderRadius: 25,
    height: 50,
    padding: 20,
    borderBottomWidth: 0,
  },
  containerOutInput: {
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  buttonStyle: {
    backgroundColor: '#f75c5e',
    width: 200,
    borderRadius: 25,
    height: 50,
    padding: 20,
  },
  ContainerHeaderText: {
    marginVertical: 30,
  },
  containerText: {flexDirection: 'row', marginTop: 20},
  text: {marginHorizontal: 10, color: '#788eec'},
});
