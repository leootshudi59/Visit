import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  ScrollView,
  Animated,
  Platform,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import React, {useEffect} from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { pointsOfInterests } from "../model/mapdata";
import { ROUTES, CSS } from "../constants";

import { Icon } from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const CARD_INSET_SPACING = width * 0.1 - 10;

const ExploreScreen = ({ navigation }) => {
  const [region, setRegion] = React.useState({
    latitude: 45.749,
    longitude: 4.805,
    longitudeDelta: 0.106,
    latitudeDelta: 0.029,
  });

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0)

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3)
      if (index >= pointsOfInterests.length) {
        index = pointsOfInterests.length - 1
      }
      if (index <= 0) {
        index = 0
      }

      clearTimeout(regionTimeout)

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index
          const {coordinate} = pointsOfInterests[index];
          _map.current.animateToRegion({
            ...coordinate,
            longitudeDelta: region.longitudeDelta-0.08,
            // latitudeDelta: region.latitudeDelta
          }, 350)
        }
      }, 10)
    })
  })

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "top" }}>
      <MapView
        ref={_map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={region}
        style={{ height: "100%", width: "100%" }}
      >
        {pointsOfInterests.map((poi, i) => {
          console.log(poi);
          return (
            <Marker key={i} coordinate={poi.coordinate} title={poi.title}>
              {/* <Animated.View style={styles.markerWrap}>

              </Animated.View> */}
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor={CSS.color.APP_BLACK}
          style={{ flex: 1, padding: 0 }}
        />
        <Image
          source={require("../assets/magnifying-glass.png")}
          style={{ width: 20, height: 20, tintColor: CSS.color.APP_BLACK }}
        />
      </View>
              {/* <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.chipsScrollView}
        ></ScrollView> */}
        <Animated.ScrollView
          horizontal={true}
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={styles.scrollView}
          snapToInterval={ CARD_WIDTH + 20}
          snapToAlignment={"center"}
          contentInset={{
            top: 0,
            // left: CARD_INSET_SPACING,
          //   bottom: 0,
          //   right: CARD_INSET_SPACING
          }}
          contentContainerStyle={{
            paddingHorizontal: Platform.OS === "android" ? CARD_INSET_SPACING : 0
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: mapAnimation
                  }
                }
              }
            ],
            {useNativeDriver:true}
          )}
        >
          {pointsOfInterests.map((poi, i) => {
            return (
              <View style={styles.card} key={i}>
                <Image
                  source={poi.image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContent}>
                  <Text numberOfLines={1}>{poi.title}</Text>
                  <Text numberOfLines={1}>{poi.description}</Text>
                </View>
              </View>
            );
          })}
        </Animated.ScrollView>
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
    width: 150,
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 60 : 40,
    height: 56,
    flexDirection: "row",
    backgroundColor: CSS.color.APP_WHITE,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 60,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: "#6d6868",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  chipsScrollView: {
    position: "absolute",
    height: "50",
    top: Platform.OS === "ios" ? 90 : 80,
    paddingHorizontal: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  card: {
    marginBottom: 130,
    elevation: 2,
    backgroundColor: CSS.color.APP_WHITE,
    borderRadius: 15,
    marginHorizontal: 10,
    shadowColor: "#6d6868",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { x: 2, y: -2 },
    overflow: "hidden",
    height: CSS.size.height.CARD_HEIGHT,
    width: CARD_WIDTH,
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
});
