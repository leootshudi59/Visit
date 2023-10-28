import "react-native-gesture-handler";

import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/FontAwesome";

import { BACKGROUND_COLOR } from "./css";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import MainTabScreen from "./screens/MainTabScreen";
import TabNavigator from "./navigators/TabNavigator";

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeStack"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};

const DetailsStackScreen = () => {
  return (
    <DetailsStack.Navigator initialRouteName="Tabs">
      <DetailsStack.Screen name="Tabs" component={MainTabScreen} />
      <DetailsStack.Screen name="Index" component={DetailsScreen} options={{ headerShown: false }} />
    </DetailsStack.Navigator>                                                                                                                                 
  );
};

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Tabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: BACKGROUND_COLOR,
          },
          headerTintColor: "#fefdfd",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen name="Overview" component={MainTabScreen}/>
        <Drawer.Screen name="Details" component={DetailsStackScreen}/> */}

        {/* <MainTabScreen /> */}
        <TabNavigator />
      {/* </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
