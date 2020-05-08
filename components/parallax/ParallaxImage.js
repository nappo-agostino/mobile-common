import React from "react";
import { View, Image } from "react-native";
import { DEVICE_HEIGHT } from "../../utils/dimension";
import StyledText from "../StyledText";
import PublicImage from "../PublicImage";

export const getImage = (image, imageStyle) => {
  if (image) {
    return typeof image === "object" ? (
      <PublicImage imagePath={image.path} imageStyle={imageStyle} />
    ) : (
      <Image
        source={typeof image === "string" ? { uri: image } : image}
        style={{ height: "100%", width: "100%", opacity: 0.6, ...imageStyle }}
      />
    );
  }
  return null;
};

const ParallaxImage = ({
  image,
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  imageStyle,
  parallaxHeaderHeight,
}) => {
  const titleWords = title?.split(" ");
  return (
    <View style={{ height: DEVICE_HEIGHT / 3, position: "relative" }}>
      <View
        style={{
          position: "absolute",
          top:
            titleWords?.length > 1 && title?.length > 20
              ? 100 - titleWords?.length * 5
              : parallaxHeaderHeight / 2 - 10,
          zIndex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        {title && subTitle ? (
          <>
            <StyledText style={{ textAlign: "center", ...titleStyle }}>
              {title}
            </StyledText>
            <StyledText style={{ textAlign: "center", ...subTitleStyle }}>
              {subTitle}
            </StyledText>
          </>
        ) : (
          title && (
            <StyledText
              style={{
                textAlign: "center",
                paddingHorizontal: 15,
                ...titleStyle,
              }}
            >
              {title}
            </StyledText>
          )
        )}
      </View>
      {/* <View style={{ backgroundColor: theme.colors.imageOpacityColor }}>
        {getImage(image, imageStyle)}
      </View> */}
    </View>
  );
};

export default ParallaxImage;
