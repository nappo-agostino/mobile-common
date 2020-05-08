import React from "react";
import PropTypes from "prop-types";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import ParallaxImage from "./ParallaxImage";
import { DEVICE_HEIGHT } from "../../utils/dimension";
import theme from "../../styles/theme";
import { nodeProps, textProps } from "../proptypes";
import StyledText from "../StyledText";

const Parallax = ({
  renderBackground,
  children,
  title,
  subtitle,
  image,
  parallaxHeaderHeight,
  titleStyle,
  subTitleStyle,
  imageStyle = { height: parallaxHeaderHeight },
}) => {
  return (
    <ParallaxScrollView
      showsVerticalScrollIndicator={false}
      contentBackgroundColor={theme.colors.mainBackground}
      headerBackgroundColor="white"
      parallaxHeaderHeight={parallaxHeaderHeight}
      backgroundSpeed={10}
      renderBackground={() =>
        renderBackground || (
          <ParallaxImage
            image={image}
            title={title}
            subtitle={subtitle}
            titleStyle={titleStyle}
            subTitleStyle={subTitleStyle}
            imageStyle={imageStyle}
            parallaxHeaderHeight={parallaxHeaderHeight}
          />
        )
      }
    >
      {children}
    </ParallaxScrollView>
  );
};

Parallax.propTypes = {
  renderBackground: PropTypes.oneOfType(nodeProps),
  children: PropTypes.oneOfType(nodeProps),
  title: PropTypes.oneOfType([...nodeProps, StyledText]),
  subtitle: PropTypes.oneOfType([...nodeProps, StyledText]),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  titleStyle: PropTypes.shape(textProps),
  subTitleStyle: PropTypes.shape(textProps),
  parallaxHeaderHeight: PropTypes.number,
};

Parallax.defaultProps = {
  renderBackground: null,
  title: null,
  subtitle: null,
  children: null,
  titleStyle: { fontSize: 20, fontWeight: "bold", color: "white" },
  subTitleStyle: { fontSize: 15, fontWeight: "bold", color: "white" },
  parallaxHeaderHeight: DEVICE_HEIGHT / 3,
};

export default Parallax;
