import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../Screens/FavoriteScreen";
import MovieDetailScreen from "../Screens/MovieDetailScreen";

const Stack = createNativeStackNavigator();
const MovieNavigation = () => (
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
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{ title: "", headerShown: false }}
    />
  </Stack.Navigator>
);

export default MovieNavigation;
