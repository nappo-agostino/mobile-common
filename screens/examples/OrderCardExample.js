import React from "react";
import { View } from "react-native";
import OrderCard from "../../components/cards/OrderCard";
import theme from "../../styles/theme";

const OrderCardExample = () => {
  return (
    <View style={{ margin: 15, flex: 1 }}>
      <OrderCard
        order={{
          number: 12345,
          data: "10/05/2020",
          time: "20:20",
          restaurant: { name: "restaurant 1" },
          price: 21.0,
        }}
        withBadge
        primaryColor={theme.APP_MOH.primaryColor}
      />
    </View>
  );
};

export default OrderCardExample;
