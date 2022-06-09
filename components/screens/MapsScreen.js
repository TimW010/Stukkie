import * as React from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import sights from "../sights.json";

function MapsScreen() {
  const [isActive, setIsActive] = React.useState(false);

  const [currentLocation, setCurrentLocation] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  React.useEffect(() => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (location) {
        console.log(location);
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    };
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        Region={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {/* {isActive
          ? sights.map((prop, key) => {
              return (
                <Marker
                  key={key}
                  coordinate={{
                    latitude: parseFloat(prop.latitude),
                    longitude: parseFloat(prop.longitude),
                  }}
                  title={prop.name}
                />
              );
            })
          : null} */}
      </MapView>
      {isActive ? (
        <Callout style={styles.menu}>
          <View style={{ margin: 10 }}>
            {sights.map((prop) => {
              return <Text>{prop.name}</Text>;
            })}
          </View>
        </Callout>
      ) : null}
      <Callout>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            setIsActive(!isActive);
          }}
        >
          {isActive ? (
            <Ionicons name={"ios-close"} size={24} color={"#3D3D3D"}></Ionicons>
          ) : (
            <Ionicons name={"ios-list"} size={24} color={"#3D3D3D"}></Ionicons>
          )}
        </TouchableOpacity>
      </Callout>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  menuButton: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    margin: 10,
  },
  menu: {
    backgroundColor: "#fff",
    display: "flex",
    borderRadius: 10,
    margin: 10,
  },
});

export default MapsScreen;
