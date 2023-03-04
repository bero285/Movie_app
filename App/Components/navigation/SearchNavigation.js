import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../Screens/FavoriteScreen";
import MovieDetailScreen from "../Screens/MovieDetailScreen";
import SearchScreen from "../Screens/SearchScreen";




const Stack = createNativeStackNavigator();
const SearchNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue", //Set Header color
      },
    }}
  >
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{ title: "", headerShown: false }}
    />
       <Stack.Screen
      name="FavoriteMovie"
      component={FavoriteScreen}
      options={{ title: "", headerShown: false }}
    />

  </Stack.Navigator>
);

export default SearchNavigation;
