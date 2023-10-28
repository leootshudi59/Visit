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
  
  import { Icon } from "react-native-vector-icons/Ionicons";
  
  
  import { BACKGROUND_COLOR } from "../css";
  
  const ProfileScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile screen</Text>
      </View>
    );
  };
  
  export default ProfileScreen;