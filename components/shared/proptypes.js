import PropTypes from "prop-types";
import theme from "../../styles/theme";

const defaultFontFamily = "space-mono";

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
  fontFamily: defaultFontFamily,
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
  textFontFamily: defaultFontFamily,
  textFontSize: 14,
};

export const nodeProps = [PropTypes.arrayOf(PropTypes.node), PropTypes.node];

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

export const style = {
  ...containerPropsStyle,
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  alignItems: PropTypes.oneOf(["flex-start", "flex-end", "center"]),
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
  labelTextStyle: PropTypes.shape(defaultTextProps),
  labelFontSize: PropTypes.number,
  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  required: PropTypes.bool,
  requiredColor: PropTypes.string,
  textStyle: PropTypes.shape(textProps),
  ...textProps,
  color: PropTypes.string,
  error: PropTypes.string,
  errorColor: PropTypes.string,
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
  labelTextStyle: null,
  labelFontSize: 14,
  labelFontFamily: defaultFontFamily,
  labelColor: theme.colors.defaultColor,
  label: null,
  info: null,
  required: false,
  requiredColor: theme.colors.errorColor,

  ...defaultTextProps,
  style: null,
  textStyle: defaultTextProps,
  error: null,
  errorColor: theme.colors.errorColor,
  value: "",
  color: theme.colors.defaultColor,
  activeTintColor: theme.colors.activeTintColor,
  inactiveTintColor: theme.colors.inactiveTintColor,
  placeholderTextColor: theme.colors.defaultPlaceHolderTextColor,
  placeholder: null,
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
