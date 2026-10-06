import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-bold font-sans-extrabold">Home</Text>
      <Link
        href="/onboarding"
        className="rounded p-4 mt-4 font-sans-bold bg-black text-white"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="rounded p-4 mt-4 font-sans-bold bg-black text-white"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="rounded p-4 mt-4 font-sans-bold bg-black text-white"
      >
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}
