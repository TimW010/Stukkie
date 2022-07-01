import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Appearance,
  useColorScheme,
} from "react-native";

function ListScreen() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeButtonStyle =
    colorScheme === "light" ? styles.lightButton : styles.darkButton;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[{ fontSize: 36 }, themeTextStyle]}>
        Bezienswaardigheden
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  lightButton: {
    borderColor: "#3D3D3D",
  },
  darkButton: {
    borderColor: "#fff",
  },
});

export default ListScreen;
