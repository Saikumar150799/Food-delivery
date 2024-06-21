import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Restaurant from "../components/Restaurant";
import Featured from "../components/Featured";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={24}
              color={COLORS.primaryLightGreyHex}
            />
            <TextInput style={styles.searchInput} placeholder="Search here" />
            <TouchableOpacity>
              <EvilIcons
                name="location"
                size={30}
                color={COLORS.primaryBlackHex}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Restaurant />

        <Featured />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  searchContainer: {
    padding: 10,
    borderWidth: 1.2,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.primaryLightGreyHex,
  },
  searchInput: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
});
