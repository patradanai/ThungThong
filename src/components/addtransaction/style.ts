import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    width: windowWidth,
    height: windowHeight,
    margin: 0,
  },
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
    backgroundColor: 'white',
    width: '100%',
    height: 50,
  },
  contentSheet: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 0,
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
  },
  containerText: {
    width: '76%',
    height: '100%',
    justifyContent: 'center',
    marginLeft: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
});
