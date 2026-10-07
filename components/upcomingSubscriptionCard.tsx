import { formatCurrency } from "@/libs/utils";
import React from "react";
import { Image, Text, View } from "react-native";

const UpcomingSubscriptionCardtsx = ({
  name,
  price,
  daysLeft,
  icon,
  currency,
}: UpcomingSubscription) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <View className="upcoming-icon-cont">
          <Image source={icon} className="upcoming-icon" />
        </View>

        <View>
          <Text className="upcoming-price">
            {formatCurrency(price, currency)}
          </Text>

          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeft > 1 ? `${daysLeft} days left` : "Last day"}
          </Text>
        </View>
      </View>

      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

export default UpcomingSubscriptionCardtsx;
