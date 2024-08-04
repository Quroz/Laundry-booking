import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: Colors.blue,
          height: 70,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
          Basket Total
        </Text>
        <View style={{ gap: 5 }}>
          <Text style={{ color: "white", fontSize: 15 }}>$0</Text>
          <Text style={{ color: "white", fontSize: 15 }}>FOR 0 ITEMS</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          height: "40%",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          YOUR BASKET IS EMPTY
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: Colors.blue,
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 5,
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          width: 200,
          marginTop: 40,
        }}
        onPress={() => router.push("/basket/select")}
      >
        <Text style={{ color: "white" }}>Place an Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
