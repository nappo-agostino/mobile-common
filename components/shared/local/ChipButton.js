import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import StyledText from "../StyledText";
import icons from "../../../assets/images/chipButtons/index";
import theme from "../../../styles/theme";

const Container = styled.TouchableOpacity`
  margin-horizontal: 10px;
`;

const GradientContainer = styled(LinearGradient).attrs({
  colors: [theme.colors.secondaryColor, theme.colors.primaryColor],
})`
  border-radius: 15px;
  flex-direction: row;
  overflow: hidden;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
`;

const ChipButton = ({ iconName, iconSize = 22, label, onPress }) => {
  return (
    <Container onPress={onPress}>
      <GradientContainer
        colors={[theme.colors.secondaryColor, theme.colors.primaryColor]}
      >
        <SvgXml width={iconSize} height={iconSize} xml={icons[iconName]} />
        <StyledText
          fontFamily="roboto-medium"
          fontSize={9}
          color="white"
          style={{ textTransform: "uppercase", marginHorizontal: 5 }}
        >
          {label}
        </StyledText>
      </GradientContainer>
    </Container>
  );
};

export default ChipButton;
