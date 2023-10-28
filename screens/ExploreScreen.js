import {
    StyleSheet,
    Text,
    View,
    Button,
    StatusBar,
    ScrollView,
  } from "react-native";
  import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  
  import { Icon } from "react-native-vector-icons/Ionicons";
  
  const ExploreScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "top" }}>
        <MapView provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={{ height: '100%', width: '100%'}}>

        </MapView>
      </View>
    );
  };
  
  export default ExploreScreen;