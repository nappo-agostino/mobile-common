import React from "react";
import { SvgXml } from "react-native-svg";

const TabIcon = ({ icon, tintColor }) => {
  return <SvgXml width={26} height={22} xml={icon} fill={tintColor} />;
};

export default TabIcon;
