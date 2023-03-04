import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect, createContext } from "react";
import FavoriteScreen from "./App/Components/Screens/FavoriteScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieDetailScreen from "./App/Components/Screens/MovieDetailScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AppNavigator from "./App/Components/navigation/AppNavigator";
import MovieNavigation from "./App/Components/navigation/MovieNavigation";
import { AsyncStorage } from "react-native";
import { MyContext } from "./MyContext";
export default function App() {
  const [checker, setChecker] = useState(false);

  return (
    <MyContext.Provider value={{ checker, setChecker }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <FavoriteScreen/> */}
        <NavigationContainer>
          <View style={styles.container}>
            <AppNavigator />

            <StatusBar style="auto" />
          </View>
        </NavigationContainer>
      </SafeAreaView>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
});
