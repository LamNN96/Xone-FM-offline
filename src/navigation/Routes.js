import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../components/Home";

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

let Navigation = createAppContainer(Routes);
export default Navigation;
