import { Text, View } from "react-native"; // Use Text from react-native
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

const CustomHeaderTitle = ({ title }: { title: string }) => (
  <View style={{ alignItems: "center", flex: 1 }}>
    <Text style={{ fontSize: 36, fontWeight: "900" }}>{title}</Text>
  </View>
);

export default function TodayLayout() {
  const [dayName, setDayName] = useState("");

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date();
    const currentDay = days[d.getDay()];
    setDayName(currentDay);
  }, []);

  return (
    <Stack
      screenOptions={{
        headerTitle: () => <CustomHeaderTitle title={dayName} />,
      }}
    />
  );
}
