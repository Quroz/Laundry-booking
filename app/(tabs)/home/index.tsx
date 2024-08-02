import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ height: 200, backgroundColor: Colors.yellow, padding: 10 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 200, height: 50, resizeMode: "cover" }}
            source={{
              uri: "https://laundrymate.in/assets/images/shared/branding/Logo.webp",
            }}
          />
          <Octicons name="three-bars" size={24} color="white" />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <View>
            <Text style={{ fontWeight: 500 }}>Hi Filip</Text>
            <Text
              style={{
                fontWeight: "500",
                color: "white",
                fontSize: 14,
                marginTop: 4,
              }}
            >
              Home | Stockholm | 1337
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color={Colors.blue}
            />
            <Text style={{ fontWeight: "500", color: Colors.blue, width: 50 }}>
              QUICK HELP
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            width: 350,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            flexDirection: "row",
            gap: 10,
            padding: 10,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View>
            <Text style={{ fontWeight: "bold", color: Colors.blue }}>
              QUICK ORDER
            </Text>
            <Text style={{ marginTop: 5 }}>
              Book a pickup slot and a delivery option.
            </Text>
            <Text>We will be at your doorstep on time</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.yellow,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <Text>BOOK NOW</Text>
              </TouchableOpacity>
              <MaterialCommunityIcons name="truck" size={24} color="#034694" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
