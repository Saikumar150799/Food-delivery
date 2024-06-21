import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { restaurants } from "../data";
import { COLORS } from "../theme";
import { useState } from "react";

const Restaurant = () => {

  const [active, setActive] = useState(null);
  
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal: 15, marginTop: 20 }}
    >
      {restaurants.map((restaurant, index) => (
        <TouchableOpacity key={index} onPress={() => setActive(restaurant.id)}>
          <View style={styles.container}>
            <View
              style={[
                restaurant.id === active
                  ? styles.activeRestaurant
                  : styles.restaurant,
              ]}
            >
              <Image style={styles.image} source={restaurant.image} />
            </View>
            <Text
              style={[
                restaurant.id === active
                  ? styles.activeRestaurantName
                  : styles.restaurantName,
              ]}
            >
              {restaurant.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  restaurant: {
    backgroundColor: COLORS.lighgray,
    padding: 5,
    marginRight: 15,
    borderRadius: 50,
  },
  activeRestaurant: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: 5,
    marginRight: 15,
    borderRadius: 50,
  },
  image: {
    width: 40,
    height: 40,
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
    color: COLORS.primaryBlackRGBA,
  },
  activeRestaurantName: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
    color: COLORS.secondaryGreyHex,
  },
});
