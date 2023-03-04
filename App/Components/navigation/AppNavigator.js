import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "../Screens/FavoriteScreen";
import MovieDetailScreen from "../Screens/MovieDetailScreen";
import MovieNavigation from "./MovieNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchScreen from "../Screens/SearchScreen";
import SearchNavigation from "./SearchNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue", //Set Header color
      },
    }}
  >
    <Stack.Screen
      name="FavoriteMovie"
      component={FavoriteScreen}
      
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="search"
      component={SearchScreen}
      options={{ title: "", headerShown: false }}
    />
      <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{ title: "", headerShown: false }}
    />
  </Stack.Navigator>
);
export default AppNavigator;















// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import FavoriteScreen from "../Screens/FavoriteScreen";
// import MovieDetailScreen from "../Screens/MovieDetailScreen";
// import MovieNavigation from "./MovieNavigation";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import SearchScreen from "../Screens/SearchScreen";
// import SearchNavigation from "./SearchNavigation";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Tab = createBottomTabNavigator();

// const AppNavigator = () => (
//   <Tab.Navigator
//     screenOptions={{
//       tabBarStyle: {
//         backgroundColor: "dodgerblue",
//         borderColor: "none",
//         color: "white",
//       },
//       tabBarActiveBackgroundColor:"blue",
//       tabBarLabelStyle: {
//         fontSize: 15,
//         color: "white",
//         // fontWeight: "bold",
//       },
//     }}
//   >
//     <Tab.Screen
//       name="FavoriteMovie"
//       component={MovieNavigation}
//       options={{
//         headerShown: false,
//         color: "orange",

//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons color="orange" size={size} name="movie" />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Search"
      
//       component={SearchNavigation}
//       options={{
//         headerShown: false,

//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons
//             color="orange"
//             size={size}
//             name="search-web"
//           />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );
// export default AppNavigator;
