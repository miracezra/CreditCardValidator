import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
  container: {
    height: height / 2,
  },
  header: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(84,173,192)',
  },
  textInput: {
    width: width - 30,
    height: 35,
    backgroundColor: 'silver',
    borderRadius: 12,
    marginBottom: 15,
    paddingLeft: 8,
  },
  validInput: {
    width: width / 5,
    backgroundColor: 'silver',
    height: 35,
    borderRadius: 12,
    marginBottom: 15,
    paddingLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cvvLabel: {
    top: 8,
    left: 15,
    marginRight: 5,
  },
  validateButton: {
    backgroundColor: 'rgb(84,173,192)',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  validateButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  errorStyle: {
    borderColor: 'red',
    borderWidth: 2,
  },
});
