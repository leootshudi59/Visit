import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  ScrollView,
} from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Icon } from "react-native-vector-icons/Ionicons";

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "top" }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={{
          latitude: 45.749,
          longitude: 4.832,
          longitudeDelta: 0.2601,
        }}
        style={{ height: "100%", width: "100%" }}
      >
        <Marker
          coordinate={{
            latitude: 45.7598982,
            longitude: 4.7885529,
          }}
          title="Maison"
        >
        </Marker>
      </MapView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  bubble: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#1a1111",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150
  }
})