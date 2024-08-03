import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="book" />
      </Stack>
    </>
  );
};

export default HomeLayout;
