import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // marginHorizontal: 10,
  },
  button: {
    height: 30,
    width: 50,
  },
  headerSheet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: 'white',
    height: 50,
  },
  dateIcon: {
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 10,
    marginVertical: 10,
  },
  containerText: {
    width: '77%',
    height: '100%',
    justifyContent: 'center',
    paddingBottom: 10,
    marginLeft: 20,
    borderBottomWidth: 1,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    height: 70,
  },
});
