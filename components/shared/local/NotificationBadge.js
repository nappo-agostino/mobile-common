import React from "react";
import { Badge } from "react-native-elements";
import theme from "../../../styles/theme";

const NotificationBadge = ({
  badgeStyle,
  containerStyle,
  value,
  textStyle,
  status,
  onPress
}) => {
  return (
    <Badge
      badgeStyle={{ backgroundColor: theme.colors.red, ...badgeStyle }}
      containerStyle={containerStyle}
      value={value}
      textStyle={textStyle}
      status={status}
      onPress={onPress}
    />
  );
};

export default NotificationBadge;
