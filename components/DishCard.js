import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useCartStore } from "../store";

const DishCard = ({ dish }) => {
  
  const { addToCart, removeFromCart } = useCartStore((state) => state);

  const quantity = useCartStore((state) => state.cart.find((item) => item.id === dish.id)?.quantity || 0
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={dish.image} />
      <View style={styles.card}>
        <View>
          <Text style={styles.dishName}>{dish.name}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.price}>${dish.price}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(dish)}
            >
              <Entypo name="plus" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => removeFromCart(dish.id)}
              disabled={quantity <= 0}
            >
              <Entypo name="minus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 20,
    padding: 8,
    borderRadius: 25,
    elevation: 1,
    shadowColor: COLORS.primaryBlackHex,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,

    shadowOffset: { width: -1, height: 5 },
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    // gap:10,
  },
  button: {
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 50,
    padding: 3,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  card: {
    flex: 1,
  },
  dishName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dishDescription: {
    fontSize: 15,
    color: COLORS.primaryLightGreyHex,
    marginVertical: 5,
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
