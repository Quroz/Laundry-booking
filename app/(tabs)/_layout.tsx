import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "black" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={24} color="#7cb9e8" />
            ) : (
              <Ionicons name="home-outline" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          tabBarLabel: "Basket",
          tabBarLabelStyle: { color: "black" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="basket-outline" size={24} color="#7cb9e8" />
            ) : (
              <Ionicons name="basket-outline" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarLabel: "Orders",
          tabBarLabelStyle: { color: "black" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="#7cb9e8"
              />
            ) : (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="black"
              />
            ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
