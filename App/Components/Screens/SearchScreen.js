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
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../Card";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SearchScreen({ navigation }) {
  const [saveApi, setSaveApi] = useState([]);
  const [show, setShow] = useState(false);
  const [searchM, setSearchM] = useState([]);
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

  const filterFunction = (text) => {
    setShow(true);
    setSearchM(() => {
      return saveApi.map((item) => {
        return item.filter((data) => {
          if (data.original_title != undefined) {
            return data.original_title
              .toLowerCase()
              .replace(/\s/g, "")
              .includes(text.toLowerCase().replace(/\s/g, ""));
          }
        });
      });
    });
    if (text.length === 0) {
      setShow(false);
    }
  };

  // itemId.original_title.toLowerCase().replace(/\s/g, '')
  // console.log(saveApi);
  return (
    <View style={{ backgroundColor: "#2C3E50", flex: 1 }}>
      <View style={styles.tabNavStyle}>
        <TouchableOpacity
          style={styles.favouriteButton}
          onPress={() => navigation.navigate("FavoriteMovie")}
        >
          <MaterialCommunityIcons color="white" size={25} name="movie" />
          <Text style={styles.favouriteText}>Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButton}
          // onPress={() => navigation.navigate("search")}
        >
          <MaterialCommunityIcons color="#EF2E1A" size={25} name="search-web" />
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>Find Your Favourite Movie</Text>
        <TextInput
          onChangeText={(text) => filterFunction(text)}
          placeholder="search for movies"
          style={styles.search}
        />
        <View numColamns={2} style={styles.container}>
          {/* <Card /> */}
          <View style={styles.flatContainer}>
            {show === false &&
              saveApi.map((data, index) => {
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
                          onPress={() =>
                            navigation.navigate("MovieDetail", item)
                          }
                        />
                      );
                    }}
                  />
                );
              })}
            {show === true &&
              searchM.map((data, index) => {
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
                          onPress={() =>
                            navigation.navigate("MovieDetail", item)
                          }
                        />
                      );
                    }}
                  />
                );
              })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",

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
    paddingBottom: 385,
    marginTop: 10,
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
  search: {
    // flex:1
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.9,
    marginLeft: 10,
    fontSize: 18,
    paddingLeft: 20,
  },
  text: {
    fontSize: 35,
    fontWeight: "900",
    padding: 10,
    // marginTop: 20,
    color: "white",
  },
});
