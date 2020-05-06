import { APP_TYPES } from "../app.types";
import appMohTheme from "./app-moh.style";
import appLocalTheme from "./app-local.style";
import defaultStyle from "./default.style";

export const primaryColor = "#00B7FF";
export const secondaryColor = "#349BCF";
export const borderColor = "#349BCF";

export default {
  colors: {
    primaryColor: "#00B7FF",
    secondaryColor: "#349BCF",
    activeTintColor: "#349BCF",
    inactiveTintColor: "#00B7FF",
    defaultBorderColor: "#349BCF",
    defaultColor: "#55595c",
    defaultPlaceHolderTextColor: "#909090",
    // borderColor: "#B4DCED",
    red: "#CB2D24",
    green: "#449D44",
    orange: "#F7A445",
    grey: "#909090",
    disabledColor: "#909090",
    svgIcon: "#55595c",
    errorColor: "#A90D23",
    imageOpacityColor: "#2E241E",
  },
  [APP_TYPES.DEFAULT]: { ...defaultStyle },
  [APP_TYPES.APP_LOCAL]: { ...appLocalTheme },
  [APP_TYPES.APP_MOH]: { ...appMohTheme },

  previewOpacity: 0.7,
  borderCardWith: 1,
};
