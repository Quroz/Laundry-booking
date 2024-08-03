import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  Entypo,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();
  return (
    <ScrollView style={{ flex: 1 }}>
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
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          width: 350,
          position: "absolute",
          top: 150,
          left: "50%",
          transform: [{ translateX: -175 }],
          flexDirection: "row",
          gap: 10,
          padding: 10,
          zIndex: 50,
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
            <Pressable
              style={{
                backgroundColor: Colors.yellow,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
                zIndex: 1,
              }}
              onPress={() => router.push("/home/book")}
            >
              <Text>BOOK NOW</Text>
            </Pressable>
            <MaterialCommunityIcons name="truck" size={24} color="#034694" />
          </View>
        </View>
      </View>

      <View style={{ flex: 1, padding: 10 }}>
        <View
          style={{
            marginTop: 90,
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 12, borderRadius: 10 }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View>
                <Text
                  style={{ color: "#febe10", fontSize: 15, fontWeight: "bold" }}
                >
                  Club{" "}
                  <Text
                    style={{
                      color: "#034694",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Ultimate
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "300",
                    width: 130,
                    marginTop: 10,
                  }}
                >
                  Put your laundry on Cruise Control
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "300",
                    width: 130,
                    marginTop: 3,
                  }}
                >
                  Subscribe and get the benefits
                </Text>
              </View>
              <Entypo name="triangle-right" size={24} color="#034694" />
            </View>
          </View>

          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 10,
              marginRight: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Ionicons name="basket-outline" size={24} color="#034694" />
              <View>
                <Text
                  style={{ color: "#febe10", fontSize: 15, fontWeight: "bold" }}
                >
                  Place Your <Text style={{ color: "#034694" }}>Order</Text>
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "300",
                    width: 130,
                    marginTop: 10,
                  }}
                >
                  Select items from the catalogue below
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "300",
                    width: 130,
                    marginTop: 3,
                  }}
                >
                  and book your order. It's about time
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: "row",

            gap: 10,
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 13, fontWeight: "500", color: "#034694" }}
                >
                  AFFORDABLE PRICES
                </Text>
                <Text style={{ marginTop: 4 }}>Get our Price List</Text>
              </View>
              <Entypo name="triangle-right" size={18} color="#034694" />
            </View>
            <View
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 13, fontWeight: "500", color: "#034694" }}
                >
                  AFFORDABLE PRICES
                </Text>
                <Text style={{ marginTop: 4 }}>Get our Price List</Text>
              </View>
              <Entypo name="triangle-right" size={18} color="#034694" />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 12,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "#febe10",
                  width: 100,
                  fontWeight: "bold",
                }}
              >
                WHAT'S THE PLAN?
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#034694",
                  width: 100,
                  fontWeight: "bold",
                }}
              >
                FOR THE PLANET
              </Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginLeft: "auto",
            marginRight: "auto",
            width: 200,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 7,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Ionicons name="notifications-outline" size={24} color="#034694" />
            <Text>Next Available</Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              marginTop: 5,
              color: "#034694",
              padding: 10,
            }}
          >
            Order within 15 minutes to catch this pickup slot
          </Text>
          <TouchableOpacity
            style={{
              borderColor: "#034694",
              paddingHorizontal: 10,
              paddingVertical: 4,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 0.7,
              marginTop: 8,
              borderRadius: 5,
            }}
          >
            <Text>ADD ITEMS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({});
