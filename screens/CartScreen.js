import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../theme";
import { dishes } from "../data";
import CartItemCard from "../components/CartItemCard";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            <Text style={styles.cartText}>Cart</Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.deliverContainer}>
        <Image
          style={styles.bike}
          source={require("../assets/order-bike.gif")}
        />
        <View style={styles.deliverTime}>
          <Text style={styles.deliver}>Deliver</Text>
          <Text>in 20-30 minutes</Text>
        </View>
        <Text style={styles.change}>Change</Text>
      </View>

      <ScrollView>
        <View style={styles.cardContainer}>
          {dishes.map((dish, index) => (
            <CartItemCard key={index} item={dish} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.cartTotoalContainer}>
        <View style={[styles.flex, styles.marginBottom10]}>
          <Text style={styles.font16}>Subtotal</Text>
          <Text style={styles.font16}>$16</Text>
        </View>
        <View style={[styles.flex, styles.marginBottom10]}>
          <Text style={styles.font16}>Delivery Fee</Text>
          <Text style={styles.font16}>$16</Text>
        </View>
        <View style={[styles.flex, styles.marginBottom10]}>
          <Text style={styles.orderTotal}>Order Total</Text>
          <Text style={styles.orderTotal}>$16</Text>
        </View>

        <TouchableOpacity
          style={styles.placeOrderBtn}
          onPress={() => navigation.navigate("PlaceOrder")}
        >
          <Text style={styles.placeOrder}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  deliverContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: COLORS.ternaryOrangeHex,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20,
  },
  bike: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  deliverTime: {
    flexDirection: "row",
  },
  back: {
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 50,
    width: 30,
    padding: 5,
  },
  deliver: {
    fontWeight: "bold",
    marginRight: 5,
  },
  change: {
    fontWeight: "bold",
    color: COLORS.secondaryOrangeHex,
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
  cartTotoalContainer: {
    padding: 20,
    backgroundColor: COLORS.ternaryOrangeHex,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  flex: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  font16: {
    fontSize: 16,
    color: COLORS.primaryLightGreyHex,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  placeOrderBtn: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: 15,
    alignItems: "center",
    borderRadius: 40,
  },
  orderTotal: {
    fontWeight: "bold",
    fontSize: 18,
  },
  placeOrder: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: .5,
  },
});
