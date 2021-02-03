import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    flex: 1,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: 'stretch',
  },
  borderImage: {
    borderRadius: 40,
    borderColor: '#eaeaea',
    borderWidth: 2,
    overflow: 'hidden',
    width: 45,
    height: 45,
  },
  textBold: {
    fontFamily: 'PalanquinDark-SemiBold',
    fontSize: 16,
  },
  textDate: {
    fontFamily: 'PalanquinDark-Regular',
    fontSize: 15,
    color: '#d3d3d3',
  },
  textPrice: {
    fontFamily: 'PalanquinDark-SemiBold',
    fontSize: 22,
  },
  details: {
    marginLeft: 20,
  },
  price: {
    marginLeft: 'auto',
  },
});
