import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BACKGROUND_COLOR } from "../css";

import ExploreScreen from "../screens/ExploreScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { ROUTES, CSS } from "../constants";
import ChatbotScreen from "../screens/ChatbotScreen";

const Tab = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: CSS.color.MAIN_COLOR,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
const TabNavigator = () => {
  console.log("Tab -", Tab);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: CSS.color.MAIN_COLOR,
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fefdfd",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
        headerTintColor: "#fefdfd",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 14,
              }}
            >
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? CSS.color.MAIN_COLOR : "#1a1111",
                }}
              />
              <Text
                style={{
                  color: focused ? CSS.color.MAIN_COLOR : "#1a1111",
                  fontSize: 12,
                  marginTop: 3,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "bottom",
                top: 7
              }}
            >
              <Image
                source={require("../assets/magnifier.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "#fefdfd",
                }}
              />
              <Text
                style={{
                  color: focused ? CSS.color.MAIN_COLOR : "#1a1111",
                  fontSize: 12,
                  marginTop: 3,
                  top: 36
                }}
              >
                Explore
              </Text>
            </View>
            
          ),
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      />
      {/* <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} /> */}
      <Tab.Screen
        name={ROUTES.CHATBOT}
        component={ChatbotScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 14,
              }}
            >
              <Image
                source={require("../assets/chat.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? CSS.color.MAIN_COLOR : "#1a1111",
                }}
              />
              <Text
                style={{
                  color: focused ? CSS.color.MAIN_COLOR : "#1a1111",
                  fontSize: 12,
                  marginTop: 3,
                }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TabNavigator;
