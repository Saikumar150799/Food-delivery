import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../theme";

const CartItemCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.price}>$78</Text>
      <TouchableOpacity style={styles.button}>
      <Entypo name="minus" size={18} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 10,
  },
  delete: {
    fontWeight: "bold",
    fontSize: 18,
    color: "red",
  },
  button: {
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 50,
    padding: 5,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.primaryLightGreyHex
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
  }
});
