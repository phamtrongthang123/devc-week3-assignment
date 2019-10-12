import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  containerButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: 'blue',
    padding: 17,
    margin: 2,
    borderRadius: 20
  },
  containerResult: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTextCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStyle: {
    color: 'white',
  },
  textStatus: {
    fontSize: 40,
  },

  containerUI: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    flex: 1,
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 20
  },
  avatarempty: {
    flex: 1,
    width: 0,
    height: 0,
  },
  choicecontainer: {
    flex: 1,
    flexDirection: 'row'
  },
  rightavatar: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  leftavatar: {
    flex: 1
  },
  midchoice: {
    flex: 1
  },
  choiceImg: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },

});
export default styles