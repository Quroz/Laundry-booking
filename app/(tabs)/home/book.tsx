import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons, Entypo } from "@expo/vector-icons";

const book = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          height: 70,
          backgroundColor: Colors.yellow,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Ionicons name="chevron-back" size={32} color="black" />
        <Text
          style={{ fontSize: 17, fontWeight: "500", flex: 1, marginLeft: 10 }}
        >
          Choose your address
        </Text>
        <Entypo name="cross" size={32} color="black" />
      </View>
    </ScrollView>
  );
};

export default book;

const styles = StyleSheet.create({});
