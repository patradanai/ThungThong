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
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 50,
  },
  headerSheet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: 'white',
    height: 50,
  },
  containerText: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    marginLeft: 20,
    borderBottomWidth: 1,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    height: 70,
  },
});
