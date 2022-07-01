import * as React from "react";
import { Callout, Marker } from "react-native-maps";
import { StyleSheet, View, Text, Linking } from "react-native";

function Markers() {
  // State variabel sights (wordt gevuld met data afkomstig van de 'api')
  const [sights, setSights] = React.useState([]);

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
          <View style={styles.popup}>
            <Text style={{ fontWeight: "bold" }}>{prop.name}</Text>
            <Text>Adres: {prop.address}</Text>
            <Text>Postcode: {prop.zip}</Text>
            {prop.tel ? <Text>Tel: {prop.tel}</Text> : null}
            {prop.website ? (
              <Text onPress={() => Linking.openURL(prop.website)}>
                Website: <Text style={{ color: "blue" }}>{prop.website}</Text>
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
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
});

export default Markers;
