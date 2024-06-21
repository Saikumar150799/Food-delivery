import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "./theme";
import FeaturedDeatils from "./screens/FeaturedDeatils";
import CartScreen from "./screens/CartScreen";
import PlaceOrder from "./screens/PlaceOrder";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FeaturedDeatils"
          component={FeaturedDeatils}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={({ navigation }) => ({
            // headerTitle: () => (
            //   <HeaderWithSubheader
            //     title="Cart"
            //     subheader="Your selected items"
            //     navigation={navigation}
            //   />
            // ),
            headerShown: false,
            headerLeft: () => <View />,
          })}
        />
        <Stack.Screen
          name="PlaceOrder"
          component={PlaceOrder}
          options={{headerShown: false, presentation:"fullScreenModal"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderWithSubheader = ({ title, subheader, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {subheader && <Text style={styles.subheader}>{subheader}</Text>}
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // height: 100,
  },
  backButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 50,
    padding: 5,
  },
  titleContainer: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  }
});
