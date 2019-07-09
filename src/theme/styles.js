import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  itemAudioContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  headerContainer: {
    height: 40,
    justifyContent: "center"
  },
  iconMenu: {
    fontSize: 32,
    color: "black"
  },
  headerLeftPanel: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: "center"
  },
  logoImage: {
    height: "100%",
    width: "100%"
  },
  logoContainer: {
    flex: 1
  },
  mainPanel: {
    flex: 2
  },
  flex1: {
    flex: 1
  },
  itemCategoryContainer: {
    flex: 1,
    padding: 10
  },
  categoryImage: {
    height: 150,
    width: "100%"
  },
  textNameCategory: {
    fontSize: 18,
    marginTop: 5,
    textAlign: "center"
  },
  downloadPanel: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  selctedDatePanel: {
    flex: 7,
    justifyContent: "center",
    alignItems: 'center',
  },
  textSelectedDate: {
    fontSize: 25,
  },
  downloadIconContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: 'center',
  },
  downloadIcon: {
    fontSize: 25
  }
}));
