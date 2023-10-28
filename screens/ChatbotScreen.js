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
  
  const ChatbotScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Chatbot screen</Text>
      </View>
    );
  };
  
  export default ChatbotScreen;