import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Home } from "./screens";

const MainRouting = createSwitchNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: "Home"
  }
);

export const Routing = createAppContainer(MainRouting);
