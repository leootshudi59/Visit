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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BACKGROUND_COLOR } from "../css";

import ExploreScreen from "./ExploreScreen";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
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
      {/* <HomeStack.Navigator> */}
      <Drawer.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* </HomeStack.Navigator> */}
    </Drawer.Navigator>
  );
};
const ProfileStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeStack"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
