import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  itemAudioContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  headerContainer: {
    height: 40,
    justifyContent: 'center',
  },
  iconMenu:{
    fontSize: 32,
    color: 'black'
  },
  headerLeftPanel:{
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  logoContainer:{
     height: 200,
     width: '100%'
  }
}));
