import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Appearance,
  useColorScheme,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreen({ navigation }) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeButtonStyle =
    colorScheme === "light" ? styles.lightButton : styles.darkButton;
  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}>
        Laten we effe een <Text style={{ color: "#007C00" }}>Stukkie </Text>
        lopen.
      </Text>
      <TouchableOpacity
        style={[styles.button, themeButtonStyle]}
        onPress={() => navigation.navigate("Maps")}
      >
        {colorScheme === "light" ? (
          <Ionicons name="ios-walk-outline" size={36} color="#3D3D3D" />
        ) : (
          <Ionicons name="ios-walk-outline" size={36} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 36,
    width: 300,
    textAlign: "center",
  },
  button: {
    padding: 10,
    borderRadius: 36,
    margin: 20,
    borderWidth: 2,
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

export default HomeScreen;
