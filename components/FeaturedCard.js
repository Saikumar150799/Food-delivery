import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
const FeaturedCard = ({ item, index }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity key={index} style={styles.container} onPress={()=> navigation.navigate('FeaturedDeatils', {...item})}>
      <Image style={styles.image} source={ item.image } />
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.reviewContainer}>
          <Entypo name="star" size={20} color="orange" />
          <Text style={[styles.rating, styles.font15]}>{item.rating}</Text>
          <Text style={[styles.review, styles.font15]}>
            ({item.review}k review) • {item.type}
          </Text>
        </View>
        <View style={styles.location}>
          <EvilIcons name="location" size={20} color={COLORS.primaryBlackHex} />
          <Text style={styles.font15}>Nearby • {item.nearBy} main street</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: COLORS.ternaryOrangeHex,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,

    shadowOffset: { width: -1, height: 5 },
    marginBottom: 20,
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 300,
    height: 150,
    objectFit: "cover",
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  font15: {
    fontSize: 15,
  },
  rating: {
    color: "green",
    marginHorizontal: 5,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
