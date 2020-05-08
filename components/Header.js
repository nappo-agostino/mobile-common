import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { SvgXml } from "react-native-svg";
import { Appbar } from "react-native-paper";
import theme from "../styles/theme";
import arrowBack from "../assets/images/arrows/arrow-back.svg";
import drawerIcon from "../assets/images/header/drawer-menu.svg";
import { nodeProps, textProps, defaultTextProps } from "./proptypes";

const Header = ({
  scene,
  previous,
  navigation,
  leftIcon,
  leftIconStyle,
  arrowBackIcon,
  backIconStyle,
  leftComponent,
  rightComponent,
  rightIcon,
  rightIconStyle,
  textStyle,
  onRightPress,
  logo,
}) => {
  const { options } = scene.descriptor;
  let title = null;
  if (options.headerTitle !== undefined) {
    title = options.headerTitle;
  } else if (options.title !== undefined) {
    title = options.title;
  } else {
    title = scene.route.name;
  }

  return (
    <Appbar.Header
      theme={{ colors: { primary: "white" } }}
      style={{ paddingHorizontal: 10 }}
    >
      {leftComponent || previous ? (
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
        >
          <SvgXml
            xml={arrowBackIcon || arrowBack}
            width={backIconStyle.width}
            height={backIconStyle.height}
            fill={backIconStyle.fill}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <SvgXml
            xml={leftIcon || drawerIcon}
            width={leftIconStyle.width}
            height={leftIconStyle.height}
            fill={leftIconStyle.fill}
          />
        </TouchableOpacity>
      )}
      {title && (
        <Appbar.Content
          title={title}
          style={{ alignItems: "center", ...textStyle }}
        />
      )}

      {logo && <SvgXml xml={logo} />}
      {rightComponent ||
        (rightIcon && (
          <TouchableOpacity onPress={onRightPress}>
            <SvgXml
              xml={rightIcon}
              width={rightIconStyle.width}
              height={rightIconStyle.height}
              fill={rightIconStyle.fill}
            />
          </TouchableOpacity>
        ))}
    </Appbar.Header>
  );
};

Header.propTypes = {
  scene: PropTypes.oneOfType([PropTypes.object]).isRequired,
  previous: PropTypes.oneOfType([PropTypes.object]),
  navigation: PropTypes.oneOfType([PropTypes.object]),
  arrowBackIcon: PropTypes.string,
  leftIcon: PropTypes.string,
  leftComponent: PropTypes.oneOfType(nodeProps),
  rightComponent: PropTypes.oneOfType(nodeProps),
  rightIcon: PropTypes.string,
  onRightPress: PropTypes.func,
  leftIconStyle: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
  }),
  backIconStyle: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
  }),
  rightIconStyle: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
  }),
  textStyle: PropTypes.shape(textProps),
  logo: PropTypes.string,
};

Header.defaultProps = {
  previous: null,
  navigation: null,
  arrowBackIcon: null,
  leftIcon: null,
  leftComponent: null,
  rightComponent: null,
  rightIcon: null,
  onRightPress: null,
  leftIconStyle: { width: 29, height: 18, fill: theme.DEFAULT.grey },
  backIconStyle: { width: 29, height: 18, fill: theme.DEFAULT.grey },
  rightIconStyle: { width: 29, height: 18, fill: theme.DEFAULT.grey },
  textStyle: defaultTextProps,
  logo: null,
};
export default Header;
