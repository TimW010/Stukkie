import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import sights from "./sights.json";

function Menu() {
  {
    sights.map((prop, key) => {
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
    });
  }
}

export default Menu;
