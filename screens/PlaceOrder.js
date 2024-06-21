import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const PlaceOrder = () => {
  
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.flex1}>
      <Text style={styles.orderText}>Order Confirmed</Text>
      <Image
        style={styles.Image}
        resizeMode="cover"
        source={require("../assets/Robot contactless delivery.gif")}
      />
    </View>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 400,
    height: 400,
  },
  orderText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
