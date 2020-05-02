import PropTypes from "prop-types";
import theme from "../../styles/theme";

export const styleProp = { style: PropTypes.oneOfType([PropTypes.object]) };

// BORDER
export const borderProps = {
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
};

export const defaultSearchBarBorderProps = {
  borderWidth: 1,
  borderRadius: 1,
  borderColor: theme.colors.primaryColor,
};

export const defaultBorderProps = {
  borderWidth: 0,
  borderRadius: 0,
  borderColor: theme.colors.defaultColor,
};

// STYLED TEXT
export const textProps = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
};
export const defaultTextProps = {
  color: theme.colors.defaultColor,
  fontFamily: "space-mono",
  fontSize: 14,
};

// CHILDREN STYLED TEXT
export const textChildrenProps = {
  textColor: PropTypes.string,
  textFontFamily: PropTypes.string,
  textFontSize: PropTypes.number,
};

export const defaultTextChildrenProps = {
  textColor: theme.colors.defaultColor,
  textFontFamily: "space-mono",
  textFontSize: 14,
};

// CONTAINER
export const containerPropsStyle = {
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  margin: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginLeft: PropTypes.number,
  padding: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingLeft: PropTypes.number,
};

export const textInputProps = {
  inputRef: PropTypes.oneOfType([PropTypes.object]),
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  withShadow: PropTypes.bool,
  contentContainerStyle: PropTypes.shape(containerPropsStyle),
  ...borderProps,
  style: PropTypes.shape({
    ...borderProps,
    ...containerPropsStyle,
    ...PropTypes.oneOfType([PropTypes.object]),
  }),
  textStyle: PropTypes.shape(textProps),
  ...textProps,
  color: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  activeTintColor: PropTypes.string,
  inactiveTintColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  multiline: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
  leftIcon: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func.isRequired,
};

export const defaultTextInputProps = {
  inputRef: null,
  height: 45,
  backgroundColor: "white",
  withShadow: false,
  contentContainerStyle: null,

  ...defaultTextProps,
  style: null,
  textStyle: defaultTextProps,
  fontFamily: "space-mono",
  error: "error",
  value: "",
  color: theme.colors.defaultColor,
  activeTintColor: theme.colors.activeTintColor,
  inactiveTintColor: theme.colors.inactiveTintColor,
  placeholderTextColor: theme.colors.defaultPlaceHolderTextColor,
  multiline: false,
  secureTextEntry: false,
  autoCorrect: true,
  autoCapitalize: "words",
  returnKeyType: "done",
  leftIcon: null,
  onSubmitEditing: null,
  onContentSizeChange: null,
  onFocus: null,
  onBlur: null,
};
