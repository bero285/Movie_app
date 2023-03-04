import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect, useContext, createContext } from "react";
import Card from "../Card";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyContext } from "../../../MyContext";
export default function FavoriteScreen({ navigation }) {
  const [saveApi, setSaveApi] = useState([]);
  const [storage, setStorage] = useState([]);
  const [final, setFinal] = useState([]);
  const [counter, setCounter] = useState(0);
  const { checker, setChecker } = useContext(MyContext);
  const [show, setShow] = useState(false);

  const getAllItemsFromAsyncStorage = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const allItems = await AsyncStorage.multiGet(allKeys);
      setStorage(allKeys);

      allItems.forEach((item) => {});
    } catch (error) {}
  };


    useEffect(() => {
      // console.log(storage);
      setTimeout(() => {
      setFinal(() =>
        saveApi.map((item) =>
          item.filter((itemId) => storage.includes(itemId.id.toString()))
        )
      );
    }, 4000);
      // setFinal(() =>
      //   saveApi.map((item) =>
      //     item.filter((itemId) => storage.includes(itemId.id.toString()))
      //   )
      // );
    });



    useEffect(() => {
      setTimeout(() => {
      getAllItemsFromAsyncStorage();
    }, 2000);

    });

  // useEffect(() => {
  //    getAllItemsFromAsyncStorage();
  //   // getAllItemsFromAsyncStorage();

  // }, [checker]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/trending/all/week?api_key=792546ee3eafe2bb7be98aa143a98dd0";

    const urll = "https://swapi.dev/api/people/?page=1";
    const result = async (data) => {
      let apis = await fetch(data);
      let res = await apis.json();

      setSaveApi(() => {
        return [res.results];
      });
    };
    result(url);
  }, []);

  return (
    <View style={{ backgroundColor: "#2C3E50", flex: 1 }}>
      <View style={styles.tabNavStyle}>
        <TouchableOpacity
          style={styles.favouriteButton}
          // onPress={() => navigation.navigate("search")}
        >
          <MaterialCommunityIcons color="#EF2E1A" size={25} name="movie" />
          <Text style={styles.favouriteText}>Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate("search")}
        >
          <MaterialCommunityIcons color="white" size={25} name="search-web" />
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>Favourites</Text>
        <View numColamns={2} style={styles.container}>
          {/* <Card /> */}
          <View style={styles.flatContainer}>
            {final.map((data, index) => {
              return (
                <FlatList
                  data={data}
                  key={index}
                  keyExtractor={(item) => item.id}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => {
                    return (
                      <Card
                        MovieName={item.original_title}
                        rate={item.vote_average}
                        imageSrc={
                          "https://image.tmdb.org/t/p/w500/" +
                          item.poster_path +
                          ""
                        }
                        id={item.id}
                        key={item.id}
                        onPress={() => navigation.navigate("MovieDetail", item)}
                      />
                    );
                  }}
                />
              );
            })}
            {/* <FlatList
              data={movieList}
              keyExtractor={(item) => item.id}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <Card
                    MovieName={item.name}
                    rate={item.rate}
                    imageSrc={item.MovieImage}
                    onPress={() => navigation.navigate("MovieDetail")}
                  />
                );
              }}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "#2C3E50",
    // width:300
  },

  text: {
    fontSize: 23,
    fontWeight: "500",
    padding: 10,
    marginTop: 20,
    color: "white",
  },
  header: {
    width: "100%",
    marginLeft: 10,
  },
  flatContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 200,
  },

  tabNavStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 765,
    zIndex: 3,
    backgroundColor: "#2C3E50",
    width: Dimensions.get("window").width,
  },
  favouriteButton: {
    width: 200,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    // bottom: 20,
    backgroundColor: "#2C3E50",
    zIndex: 3,
  },
  favouriteText: {
    color: "white",
  },
  searchText: {
    color: "white",
  },
  searchButton: {
    width: 200,
    height: 95,
    justifyContent: "center",
    alignItems: "center",
    // bottom: 20,
    height: 60,
    backgroundColor: "#2C3E50",
    zIndex: 3,
  },
});
