import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { dishes } from "../data";
import DishCard from "../components/DishCard";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const FeaturedDeatils = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const item = params;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image resizeMode="cover" style={styles.image} source={item.image} />
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={23} color="white" />
      </TouchableOpacity>
      <View style={styles.dishehContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.ratingLocationContainer}>
          <View style={styles.ratingContainer}>
            <Entypo name="star" size={20} color="orange" />
            <Text style={[styles.rating, styles.font18]}>{item.rating}</Text>
            <Text style={[styles.review, styles.font18]}>
              ({item.review}k review) • {item.type}
            </Text>
          </View>
          <View style={styles.location}>
            <EvilIcons
              name="location"
              size={20}
              color={COLORS.primaryBlackHex}
            />
            <Text style={[styles.font18, styles.nearby]}>
              Nearby • 123 main street
            </Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Hot and spicy</Text>

        <Text style={styles.menu}>Menu</Text>

        <TouchableOpacity style={styles.viewCartContainer} onPress={()=> navigation.navigate('Cart')}>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantity}>5</Text>
          </View>
          <Text style={styles.viewCart}>View cart</Text>
          <Text style={styles.total}>$30</Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          {dishes.map((dish, index) => {
            return <DishCard dish={dish} key={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default FeaturedDeatils;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%", // Full width
    height: 270, // Allows the height to adjust automatically
  },
  dishehContainer: {
    flex: 1,
    padding: 12,
    marginTop: -20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
  },
  ratingLocationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "green",
  },
  review: {
    color: COLORS.primaryLightGreyHex,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  font18: {
    fontSize: 15,
  },
  nearby: {
    color: COLORS.primaryLightGreyHex,
  },
  subTitle: {
    fontSize: 17,
    color: COLORS.primaryLightGreyHex,
  },
  menu: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  back: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 50,
    padding: 5,
  },
  viewCartContainer: {
    position: "absolute",
    marginHorizontal: 10,
    bottom: 20,
    backgroundColor: COLORS.primaryOrangeHex,
    zIndex: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    justifyContent: "space-between",
    borderRadius: 40,
    padding: 10,
  },
  quantityContainer: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    width: 50,
    height: 50,
    backgroundColor: COLORS.secondaryOrangeHex,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },
  viewCart: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  total: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20,
  },
});
