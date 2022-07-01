import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Appearance, useColorScheme, StyleSheet } from "react-native";
//Screens
import HomeScreen from "./components/screens/HomeScreen";
import MapsScreen from "./components/screens/MapsScreen";
import ListScreen from "./components/screens/ListScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeTintColor = colorScheme === "light" ? "#3D3D3D" : "#fff";

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Maps") {
              iconName = focused ? "ios-map" : "ios-map-outline";
            } else if (route.name === "Sights") {
              iconName = focused ? "ios-eye" : "ios-eye-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007C00",
          tabBarInactiveTintColor: themeTintColor,
          headerStyle: themeContainerStyle,
          tabBarStyle: themeContainerStyle,
          headerTitleStyle: themeTextStyle,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Maps" component={MapsScreen} />
        <Tab.Screen name="Sights" component={ListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
  lightThemeText: {
    color: "#3D3D3D",
  },
  darkThemeText: {
    color: "#fff",
  },
});
