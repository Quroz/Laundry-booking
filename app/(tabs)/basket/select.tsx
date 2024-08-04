import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { menData, kidsData, womenData } from "@/constants/Data";

const Select = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("Wash + fold");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 70,
          backgroundColor: Colors.yellow,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>
        <Text
          style={{ fontSize: 17, fontWeight: "500", flex: 1, marginLeft: 10 }}
        >
          Choose your address
        </Text>
        <Entypo name="cross" size={32} color="black" />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          onPress={() => setSelectedOption("Wash + fold")}
          style={{
            backgroundColor: "white",
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor:
              selectedOption == "Wash + fold" ? "#0066b2" : "transparent",
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/7769/7769829.png",
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 5 }}>
            Wash + fold
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedOption("Wash + Iron")}
          style={{
            backgroundColor: "white",
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor:
              selectedOption == "Wash + Iron" ? "#0066b2" : "transparent",
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/802/802826.png",
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 5 }}>
            Wash + Iron
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedOption("Steam Iron")}
          style={{
            backgroundColor: "white",
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor:
              selectedOption == "Steam Iron" ? "#0066b2" : "transparent",
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/12299/12299913.png",
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 5 }}>
            Steam Iron
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedOption("Dry Clean")}
          style={{
            backgroundColor: "white",
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor:
              selectedOption == "Dry Clean" ? "#0066b2" : "transparent",
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/7029/7029276.png",
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 5 }}>
            Dry Clean
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({});
