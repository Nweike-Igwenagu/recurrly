import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link
        href="/(auth)/sign-up"
        className="rounded p-4 mt-4 bg-black text-white"
      >
        Sign Up
      </Link>
    </View>
  );
};

export default SignIn;
