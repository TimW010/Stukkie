import * as React from "react";
import { Callout, Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Appearance,
  useColorScheme,
} from "react-native";

function Markers() {
  // State variabel sights (wordt gevuld met data afkomstig van de 'api')
  const [sights, setSights] = React.useState([]);

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  //Haalt de data op van de api en stopt dit in de state variabel hierboven.
  const getSights = () => {
    fetch("https://stud.hosted.hr.nl/0981877/sights.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSights(data);
      });
  };

  React.useEffect(() => {
    getSights();
  }, []);

  return sights.map((prop, key) => {
    return (
      <Marker
        key={key}
        coordinate={{
          latitude: parseFloat(prop.latitude),
          longitude: parseFloat(prop.longitude),
        }}
        title={prop.name}
      >
        <Callout tooltip>
          <View style={[styles.popup, themeContainerStyle]}>
            <Text style={[{ fontWeight: "bold" }, themeTextStyle]}>
              {prop.name}
            </Text>
            <Text style={themeTextStyle}>Adres: {prop.address}</Text>
            <Text style={themeTextStyle}>Postcode: {prop.zip}</Text>
            {prop.tel ? (
              <Text style={themeTextStyle}>Tel: {prop.tel}</Text>
            ) : null}
            {prop.website ? (
              <Text
                style={themeTextStyle}
                onPress={() => Linking.openURL(prop.website)}
              >
                Website:{" "}
                <Text style={{ color: "lightblue" }}>{prop.website}</Text>
              </Text>
            ) : null}
          </View>
        </Callout>
      </Marker>
    );
  });
}

const styles = StyleSheet.create({
  popup: {
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#3D3D3D",
  },
  lightThemeText: {
    color: "#3D3D3D",
  },
  darkThemeText: {
    color: "#fff",
  },
});

export default Markers;
