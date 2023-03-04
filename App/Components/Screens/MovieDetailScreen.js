import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyContext } from "../../../MyContext";
export default function MovieDetailScreen({
  onPress,
  navigation,
  route,
  onPressStorage,
}) {
  const [text, setText] = useState(true);
  const [movId, setMovId] = useState([]);
  const [show, setShow] = useState(false);
  const Listing = route.params;
  const { checker, setChecker} = useContext(MyContext);

  const getAllItemsFromAsyncStorage = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const allItems = await AsyncStorage.multiGet(allKeys);
      setMovId(allKeys);

      allItems.forEach((item) => {});
    } catch (error) {}
  };
  useEffect(() => {
    getAllItemsFromAsyncStorage();
    // setTimeout(() => {
    //   if (movId.includes(Listing.id.toString())) {
    //     setShow(true);
    //   } else {
    //     setShow(false);
    //   }
    // }, 2000);
  }, []);

  useEffect(() => {
    if (movId.includes(Listing.id.toString())) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [movId]);

  // setTimeout(()=>{
  //   if(movId.includes(Listing.id.toString()) ){
  //     setShow(true)
  //   }
  //   else{
  //     setShow(false)
  //   }
  // },3000)
  return (
    <ScrollView style={{ backgroundColor: "#2C3E50" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            style={styles.infoImage}
            source={{
              uri:
                "https://image.tmdb.org/t/p/w500/" + Listing.backdrop_path + "",
              // uri: "https://m.media-amazon.com/images/M/MV5BMTYzMzUwMjAyNV5BMl5BanBnXkFtZTgwMDk2Nzc5NzE@._V1_.jpg",
            }}
          />
          <MaterialCommunityIcons
            onPress={() => navigation.goBack()}
            style={styles.back}
            name="arrow-left"
            color="white"
            size={35}
          />
          <View style={styles.moviename}>
            <Text style={styles.name}>{Listing.original_title}</Text>
            <Text style={styles.rating} ellipsizeMode="clip" numberOfLines={1}>
              Rating {Listing.vote_average}
            </Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText} numberOfLines={text ? 3 : 0}>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of L */}
            {Listing.overview}
          </Text>
          <TouchableWithoutFeedback
            style={styles.showButton}
            onPress={() => setText(!text)}
          >
            <Text style={styles.showText}>
              {text ? "see more" : "see less"}
            </Text>
          </TouchableWithoutFeedback>

          <View style={styles.director}>
            <Text style={styles.directorText}>Director</Text>
            <Text style={styles.directorAbout}>Tim miller</Text>
          </View>
          <View style={styles.serialFilm}>
            <Text style={styles.serialFilmText}>Serial Film</Text>
            <Text style={styles.serialFilmAbout}>{Listing.original_title}</Text>
          </View>
          <View style={styles.cast}>
            <Text style={styles.castText}>The Cast</Text>
            <View style={styles.castImagesCont}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <Image
                  style={styles.castImage}
                  source={require("../assets/deadpool.jpg")}
                />
                <Image
                  style={styles.castImage}
                  source={require("../assets/deadpool.jpg")}
                />
                <Image
                  style={styles.castImage}
                  source={require("../assets/deadpool.jpg")}
                />
                <Image
                  style={styles.castImage}
                  source={require("../assets/deadpool.jpg")}
                />
                <Image
                  style={styles.castImage}
                  source={require("../assets/deadpool.jpg")}
                />
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => {
             
              AsyncStorage.setItem(
                Listing.id.toString(),
                Listing.id.toString()
              ),
                // console.log(Listing.id);
                setShow(true);
                setChecker(!checker)
                setTimeout(()=>{setChecker(!checker)},1000)
               
            }}
          >
            <Text style={styles.favoriteText}>
              {show ? "already favorite" : "+ favorite"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChecker(!checker)
              setShow(false);
              AsyncStorage.removeItem(Listing.id.toString());
             
              setTimeout(()=>{setChecker(!checker)},1000)
              
       
            }}
            style={styles.hideButton}
          >
            <Text style={styles.hideText}>Hide</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  infoImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    opacity: 0.75,
  },
  moviename: {
    position: "absolute",
    // backgroundColor:"red",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    marginTop: 225,
    // borderWidth:2,
    // borderColor:"black"
  },
  header: {
    // justifyContent:"flex-end",
    alignItems: "center",

    // paddingTop:30
  },
  name: {
    fontSize: 35,
    fontWeight: "900",
    color: "white",
    padding: 7,
    // width:Dimensions.get("window").width * 0.97 ,
  },
  rating: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    bottom: 10,
    width: 122,
  },
  showButton: {
    width: 100,
    height: 50,
    color: "red",
    backgroundColor: "black",
  },

  descriptionContainer: {
    width: Dimensions.get("window").width * 0.93,
    marginTop: 20,
  },
  showText: {
    color: "#2ECC71",
    fontSize: 18,
  },
  description: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  descText: {
    color: "#C0C0C0",
  },
  director: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor:"red",
    marginTop: 20,

    alignItems: "center",
  },
  directorText: {
    color: "#2ECC71",
    fontSize: 16,
  },
  directorAbout: {
    color: "white",
    fontSize: 16,
    marginLeft: 37,
  },
  serialFilm: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor:"red",
    marginTop: 5,
    alignItems: "center",
  },
  serialFilmAbout: {
    color: "white",
    fontSize: 16,
    marginLeft: 20,
  },
  serialFilmText: {
    color: "#2ECC71",
    fontSize: 16,
  },
  cast: {
    flexDirection: "column",
    marginTop: 40,
  },
  castImagesCont: {
    flexDirection: "row",
    marginTop: 10,
    margin: -5,
  },
  castImage: {
    width: 70,
    height: 70,
    margin: 3,
  },
  castText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700 ",
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
    flex: 1,
    // position:"absolute",
    // bottom:0
    paddingBottom: 10,
  },
  favoriteButton: {
    width: 220,
    height: 50,
    backgroundColor: "#C0392B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  hideButton: {
    width: 120,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
  },
  back: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  favoriteText: {
    color: "white",
  },
  hideText: {
    color: "#C0392B",
  },
});
