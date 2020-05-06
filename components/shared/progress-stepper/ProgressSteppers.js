import React, { useState } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import { APP_TYPES } from "../../../app.types";
import checkIcon from "../../../assets/images/check.svg";
import StyledText from "../StyledText";
import ProgressStep from "./ProgressStep";
import theme from "../../../styles/theme";

const statuses = {
  completed: {
    primaryColor: {
      [APP_TYPES.APP_MOH]: theme.APP_MOH.primaryColor,
      [APP_TYPES.DEFAULT]: theme.DEFAULT.primaryColor,
      [APP_TYPES.APP_LOCAL]: theme.APP_LOCAL.primaryColor,
    },
    iconColor: "white",
    icon: checkIcon,
  },
  active: {
    primaryColor: {
      [APP_TYPES.APP_MOH]: theme.APP_MOH.primaryColor,
      [APP_TYPES.DEFAULT]: theme.DEFAULT.primaryColor,
      [APP_TYPES.APP_LOCAL]: theme.APP_LOCAL.primaryColor,
    },
    icon: null,
  },
  incomplete: {
    primaryColor: {
      [APP_TYPES.APP_MOH]: theme.APP_MOH.labelColor,
      [APP_TYPES.DEFAULT]: theme.DEFAULT.grey,
      [APP_TYPES.APP_LOCAL]: theme.APP_LOCAL.grey,
    },
    icon: null,
  },
};

const ProgressSteppers = ({
  appType = "APP_MOH",
  status = "completed",
  steps,
}) => {
  console.log("test", statuses[status].primaryColor[appType]);
  console.log("test1", theme[APP_TYPES[appType]].primaryColor);

  return (
    <View style={{ flexDirection: "row" }}>
      <ProgressStep
        icon={checkIcon}
        stepColor={statuses[status].primaryColor[appType]}
        lineColor={statuses[status].primaryColor[appType]}
      />
      <ProgressStep
        icon={checkIcon}
        stepColor={statuses[status].primaryColor[appType]}
        lineColor={statuses[status].primaryColor[appType]}
      />
    </View>
  );
};

ProgressSteppers.propTypes = {
  appType: PropTypes.string,
  status: PropTypes.string,
  // steps:
};

ProgressSteppers.defaultProps = {
  appType: null,
  status: null,
  steps: [],
};
export default ProgressSteppers;
