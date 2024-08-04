import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import moment from "moment";

const book = () => {
  const [step, setStep] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState({});

  console.log("Selected", selectedTime);

  const pickupTimeOptions = [
    { startTime: "6:30 AM", endTime: "9:00 AM" },
    { startTime: "9:00 AM", endTime: "11:30 AM" },
    { startTime: "5:00 PM", endTime: "7:30 PM" },
    { startTime: "7:30 PM", endTime: "10:00 PM" },
  ];

  const renderTime = () => {
    const currentTime = moment(); // Hämta aktuell tid som ett moment-objekt

    return pickupTimeOptions.map((time, index) => {
      const startTime = moment(time.startTime, "h:mm A");
      const endTime = moment(time.endTime, "h:mm A");

      const isCurrentTimeBetween = currentTime.isBetween(startTime, endTime);

      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            if (!isCurrentTimeBetween) {
              setSelectedTime(time);
            }
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: isCurrentTimeBetween
                ? "gray"
                : selectedTime["startTime"] == time["startTime"]
                ? Colors.blue
                : "black",
              textDecorationLine: isCurrentTimeBetween
                ? "line-through"
                : "none",
            }}
          >
            {time.startTime} - {time.endTime}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const renderDates = () => {
    let nextDays: any[] = [];

    for (let i = 0; i < 5; i++) {
      let nextDate = moment(currentDate).add(i, "days");
      nextDays.push(nextDate);
    }

    return nextDays.map((date, index) => (
      <TouchableOpacity
        key={index}
        style={{
          backgroundColor:
            date.toString() === selectedDate.toString()
              ? Colors.blue
              : "transparent",
          alignItems: "center",
          borderColor: Colors.blue,
          borderWidth: 1,
          padding: 10,
          borderRadius: 6,
          width: 52,
        }}
        onPress={() => setSelectedDate(date)}
      >
        <Text>{date.format("D")}</Text>
        <Text>{date.format("ddd")}</Text>
      </TouchableOpacity>
    ));
  };

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
        <Ionicons name="chevron-back" size={32} color="black" />
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
          alignItems: "center",
          backgroundColor: "white",
          padding: 10,
          justifyContent: "space-around",
          paddingVertical: 40,
        }}
      >
        <Pressable
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
        <Pressable
          style={{
            width: 54,
            height: 54,
            borderRadius: 27,
            backgroundColor: "#f5f5f5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={24} color="#0066b2" />
        </Pressable>
        <Pressable
          style={{
            width: 54,
            height: 54,
            borderRadius: 27,
            backgroundColor: "#f5f5f5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="back-in-time" size={24} color="#0066b2" />
        </Pressable>

        <Pressable
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="chevron-right" size={24} color="white" />
        </Pressable>
      </View>

      <View style={{ backgroundColor: "#F0F8FF", padding: 10, flex: 1 }}>
        {step == 0 && (
          <ScrollView style={{ flex: 1 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Ionicons name="add" size={28} color={Colors.blue} />
              <Text style={{ fontSize: 16 }}>Add address</Text>
            </View>

            <View
              style={{
                borderRadius: 12,
                borderWidth: 1,
                borderColor: Colors.blue,
                padding: 15,
                marginTop: 10,
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Ionicons name="location-outline" size={24} color="#0066b2" />
                <Text style={{ fontSize: 17, fontWeight: "500", flex: 1 }}>
                  Home
                </Text>
                <FontAwesome name="flag" size={24} color="#0066b2" />
              </View>

              <Text style={{ color: "black", fontWeight: "500", width: "80%" }}>
                #48 Maruthi Nagar, NT Layout, Hebbal, T K Farm Post
              </Text>
              <Text style={{ fontWeight: "500", color: "gray" }}>
                Bangalore 560042
              </Text>
            </View>
          </ScrollView>
        )}

        {step === 1 && (
          <View style={{ backgroundColor: "white", padding: 10 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Ionicons name="calendar-outline" size={24} color="#0066b2" />
              <View>
                <Text style={{ fontSize: 16 }}>Pick up slot</Text>
                <Text style={{ marginTop: 4, fontWeight: "500", fontSize: 16 }}>
                  {currentDate.format("MMM YYYY")}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              {renderDates()}
            </View>

            <Text style={{ marginTop: 10 }}>Pick Time Options</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-around",
                gap: 20,
                marginTop: 10,
              }}
            >
              {renderTime()}
            </View>
          </View>
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "lightgray",
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderRadius: 10,
          }}
          disabled={step === 0}
          onPress={() => {
            if (step > 0) setStep((prevStep) => prevStep - 1);
            else return;
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 15 }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: Colors.blue,
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderRadius: 10,
          }}
          onPress={() => {
            if (step < 5) setStep((prevStep) => prevStep + 1);
            else return;
          }}
          disabled={step === 5}
        >
          <Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default book;

const styles = StyleSheet.create({});
