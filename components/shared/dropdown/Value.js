import React from "react";
import StyledText from "../StyledText";

const Value = ({ value, valueStyle, contained, placeHolder }) => {
  return (
    (!value && (
      <StyledText
        style={[
          contained && { color: "white" },
          {
            ...valueStyle,
          },
        ]}
        capitalize
      >
        {placeHolder}
      </StyledText>
    )) || (
      <StyledText
        style={[
          contained && { color: "white" },
          {
            ...valueStyle,
          },
        ]}
        capitalize
      >
        {value}
      </StyledText>
    )
  );
};

export default Value;
