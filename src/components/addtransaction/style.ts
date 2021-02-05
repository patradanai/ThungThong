import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#000',
  },
  headerSheet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    backgroundColor: 'white',
    width: '100%',
    height: 50,
  },
  contentSheet: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  dateIcon: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 50,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    width: windowWidth,
    height: 70,
  },
  containerText: {
    width: windowWidth,
    height: '100%',
    justifyContent: 'center',
    marginLeft: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
});
