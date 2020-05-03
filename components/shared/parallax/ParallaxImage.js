import React from "react";
import { View } from "react-native";
import { DEVICE_HEIGHT } from "../../../utils/dimension";
import { getImage } from "../../utils/utilsFunctions";
import StyledText from "../StyledText";

const ParallaxImage = ({ image, title, subtitle, notificationStyle }) => {
  const titleWords = title?.split(" ");

  return (
    <View style={{ height: DEVICE_HEIGHT / 3, position: "relative" }}>
      <View
        style={{
          position: "absolute",
          top:
            (titleWords?.length > 1 && title?.length > 20) || notificationStyle
              ? 100 - titleWords?.length * 5
              : 100,
          zIndex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        {title && subtitle ? (
          <>
            <StyledText
              fontFamily={notificationStyle ? "optima-bold" : "optima-medium"}
              color="white"
              fontSize={notificationStyle ? 30 : 20}
              style={{ textAlign: "center" }}
              uppercase={notificationStyle}
            >
              {title}
            </StyledText>
            <StyledText
              fontFamily={notificationStyle ? "optima-bold" : "optima-medium"}
              color="white"
              fontSize={notificationStyle ? 30 : 15}
              style={{ textAlign: "center" }}
              uppercase={notificationStyle}
            >
              {subtitle}
            </StyledText>
          </>
        ) : (
          title && (
            <StyledText
              fontFamily="optima-bold"
              color="white"
              fontSize={30}
              uppercase
              style={{ textAlign: "center", paddingHorizontal: 15 }}
            >
              {title}
            </StyledText>
          )
        )}
      </View>
      <View style={{ backgroundColor: theme.colors.imageOpacityColor }}>
        {getImage(image)}
      </View>
    </View>
  );
};

export default ParallaxImage;
