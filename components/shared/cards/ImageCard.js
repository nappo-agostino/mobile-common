import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Image, View } from "react-native";
import StyledText from "../StyledText";
import { style, textProps, nodeProps } from "../proptypes";
import theme from "../../../styles/theme";

const ImageCardButton = styled.TouchableOpacity`
  width: ${({ width }) => {
    if (typeof width === "number") return `${100}px`;
    return "100%";
  }};
  height: ${({ height }) => height}px;
  /* justify-content: center; */
  background-color: white;
`;

const ImageCard = (props) => {
  const {
    width,
    height,
    text,
    textPosition,
    uppercase,
    capitalize,
    textStyle,
    image,
    onPress,
    cardStyle,
    footer,
  } = props;

  const getTextVerticalPosition = () => {
    const position = textPosition.split("-");

    switch (position[0]) {
      case "top":
        return { top: 0 };
      case "center":
        return { top: "40%" };
      case "bottom":
        return { bottom: 0 };
      default:
        return { top: "40%" };
    }
  };

  const getTextHorizontalAlignment = () => {
    const position = textPosition.split("-");

    switch (position[1]) {
      case "left":
        return "left";
      case "center":
        return "center";
      case "right":
        return "right";
      default:
        return "center";
    }
  };
  return (
    <ImageCardButton
      width={width}
      height={height}
      style={{
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 0.5 }, // IOS
        shadowOpacity: 5, // IOS
        shadowRadius: 1, // IOS
        elevation: 4, // Android,
        marginBottom: 10,

        ...cardStyle,
      }}
      onPress={onPress}
    >
      <View
        style={{
          overflow: "hidden",
          backgroundColor: theme.colors.tertiaryColor,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", opacity: 0.6 }}
          source={{ uri: image }}
        />
        <View
          style={[
            { width: "100%", position: "absolute", padding: 10 },
            { ...getTextVerticalPosition() },
          ]}
        >
          <StyledText
            fontSize={20}
            uppercase={uppercase}
            capitalize={capitalize}
            style={{
              textAlign: getTextHorizontalAlignment(),
              color: "white",
              ...textStyle,
            }}
          >
            {text}
          </StyledText>
        </View>
      </View>
      {footer}
    </ImageCardButton>
  );
};

ImageCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  cardStyle: PropTypes.shape(style),
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  textPosition: PropTypes.oneOf([
    "top-left",
    "top",
    "top-right",
    "center-left",
    "center",
    "center-right",
    "bottom-left",
    "bottom",
    "bottom-right",
  ]),
  textStyle: PropTypes.shape(textProps),
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  footer: PropTypes.oneOfType(nodeProps),
};

ImageCard.defaultProps = {
  cardStyle: null,
  text: null,
  textPosition: "center",
  textStyle: { color: "white", fontSize: 20, fontWeight: "bold" },
  uppercase: false,
  capitalize: true,
  height: 120,
  width: null,
  footer: null,
};

export default ImageCard;
