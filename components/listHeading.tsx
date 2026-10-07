import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import UpcomingSubscriptionCard from "./upcomingSubscriptionCard";
import { UPCOMING_SUBSCRIPTIONS } from "@/constants/data";

const ListHeading = ({ title }: { title: string }) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>

      <TouchableOpacity className="list-action">
        <Text className="list-action-text">View all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;
