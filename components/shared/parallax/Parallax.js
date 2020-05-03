import React from "react";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import ImageScreen from "./ImageScreen";
import { DEVICE_HEIGHT } from "../../utils/dimensions";
import theme from "../../../styles/theme";

const Parallax = ({
  renderBackground,
  children,
  title,
  subtitle,
  image,
  notificationStyle,
}) => {
  return (
    <ParallaxScrollView
      showsVerticalScrollIndicator={false}
      contentBackgroundColor={theme.colors.mainBackground}
      headerBackgroundColor="#333"
      parallaxHeaderHeight={DEVICE_HEIGHT / 3}
      backgroundSpeed={10}
      renderBackground={() =>
        renderBackground || (
          <ImageScreen
            image={image}
            title={title}
            subtitle={subtitle}
            notificationStyle={notificationStyle}
          />
        )
      }
    >
      {children}
    </ParallaxScrollView>
  );
};

export default Parallax;
