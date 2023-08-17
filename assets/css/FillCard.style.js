import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: 'auto',
    width: width - 30,
  },
  header: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(84,173,192)',
    backgroundColor: 'white',
  },
  inputArea: {
    backgroundColor: 'rgb(84,173,192)',
    borderRadius: 10,
    paddingTop:15
  },
  textInput: {
    width: width - 40,
    height: 35,
    left: 5,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    paddingLeft: 8,
    borderWidth: 2,
  },
  validInput: {
    width: width / 5,
    backgroundColor: 'white',
    height: 35,
    left: 5,
    borderRadius: 12,
    borderWidth: 2,
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
    borderWidth: 2,
    marginBottom: 10,
    width: width - 30,
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
