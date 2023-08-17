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
  },
  inputArea: {
    backgroundColor: 'rgb(84,173,192)',
    borderRadius: 10,
    paddingTop: 15,
  },
  textInput: {
    width: width - 100,
    height: 40,
    left: 5,
    backgroundColor: 'white',
    paddingLeft: 8,
    marginBottom: 15,
    marginHorizontal: 30,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'silver',
    color:"black"
  },
  validArea: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },

  validInput: {
    width: width / 5,
    backgroundColor: 'white',
    height: 40,
    left: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'silver',
    marginBottom: 15,
    paddingLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
    color:"black"
  },
  cvvLabel: {
    top: 15,
    left: 25,
    marginRight: 11,
  },
  validateButton: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'silver',
    marginBottom: 10,
    width: width - 30,
  },
  validateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
