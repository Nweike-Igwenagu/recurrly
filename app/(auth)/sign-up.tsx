import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link
        href="/(auth)/sign-in"
        className="rounded p-4 mt-4 bg-black text-white"
      >
        Sign In
      </Link>
    </View>
  );
};

export default SignUp;
