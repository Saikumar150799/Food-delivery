import { ScrollView, StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { featured, iceCreams, coolDrinks } from "../data";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hot and Spicy</Text>
        <Text style={styles.subTitle}>local fast food corner</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ paddingHorizontal: 15, marginTop: 20 }}
      >
        {featured.map((item, index) => (
          <FeaturedCard key={index} item={item} />
        ))}
      </ScrollView>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ice-creams</Text>
        <Text style={styles.subTitle}>
          Icecreams offers a wide variety of high-quality, delicious flavors,
          perfect for any occasion
        </Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ paddingHorizontal: 15, marginTop: 20 }}
      >
        {iceCreams.map((item, index) => (
          <FeaturedCard key={index} item={item} />
        ))}
      </ScrollView>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cool Drinks</Text>
        <Text style={styles.subTitle}>More choices bring more taste</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ paddingHorizontal: 15, marginTop: 20 }}
      >
        {coolDrinks.map((item, index) => (
          <FeaturedCard key={index} item={item} />
        ))}
      </ScrollView>
    </>
  );
};

export default Featured;

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
  },
});
