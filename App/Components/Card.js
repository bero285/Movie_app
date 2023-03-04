import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Route } from "@react-navigation/native";

export default function Card({ imageSrc, MovieName, rate, onPress, route }) {
  // const Listing = route.params
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.rating}>
          <Text style={{color:"white",width:28}} ellipsizeMode="clip" numberOfLines={1}>{rate}</Text>
        </View>
        <ImageBackground style={styles.image} source={{ uri: imageSrc }} />
      </View>
      <Text style={styles.text}>{MovieName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    marginVertical: 5,
    // marginVertical:10
  },
  container: {
    width: 170,
    height: 300,
    // backgroundColor: "yellow",

    borderRadius: 10,
    overflow: "hidden",
  },
  text: {
    marginTop: 15,
    fontSize: 14,
    color: "white",
    width: 170,
    textAlign: "center",
    fontWeight: "400",
  },
  rating: {
    backgroundColor: "#C0392B",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    // alignSelf:"flex-end",
    marginTop: 10,
    position: "absolute",
    zIndex: 3,
    marginLeft: 120,
   
  },
  image: {
    width: 170,
    height: 300,
  },
});
