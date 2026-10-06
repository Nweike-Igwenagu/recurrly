import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/Onboarding" className="rounded p-4 mt-4 bg-black text-white">
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="rounded p-4 mt-4 bg-black text-white"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="rounded p-4 mt-4 bg-black text-white"
      >
        Go to Sign Up
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
