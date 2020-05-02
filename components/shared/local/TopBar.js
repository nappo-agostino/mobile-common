import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import theme from "../../../styles/theme";
import StyledText from "../StyledText";

const Container = styled.ScrollView.attrs(({ withIcons, centered = true }) => ({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: withIcons && centered ? 1 : null,
  },
  paddingHorizontal: 10,
}))`
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || theme.colors.secondaryColor};
  box-shadow: 3px 3px 3px black;
  max-height: 44px;
  border-bottom-width: 1px;
  border-color: #0b8fd3;
`;

const Item = styled.TouchableOpacity`
  border-bottom-color: ${({ selected }) =>
    selected ? theme.colors.orangeBorder : "transparent"};
  border-bottom-width: 2px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-horizontal: 5px;
`;

const TopBar = ({
  height,
  backgroundColor,
  items,
  keyToRender = "label",
  itemsWithIcons,
  currentTab,
  withIcons,
  centered,
  leftIconSize = 12,
  rightIconSize = 8,
  leftComponent,
  centralComponent,
  rightComponent,
  onChangeTab,
}) => {
  return !withIcons ? (
    <Container
      height={height}
      backgroundColor={backgroundColor}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {items.map((item, index) => (
        <Item
          key={index}
          selected={currentTab === item}
          onPress={() => onChangeTab(item)}
        >
          <StyledText
            fontFamily="roboto-medium"
            color="white"
            style={{ textTransform: "capitalize", paddingHorizontal: 5 }}
          >
            {item}
          </StyledText>
        </Item>
      ))}
    </Container>
  ) : (
    <Container
      height={height}
      backgroundColor={backgroundColor}
      horizontal
      showsHorizontalScrollIndicator={false}
      centered={centered}
      withIcons={withIcons}
    >
      {itemsWithIcons.map((item, index) => (
        <Item
          key={index}
          selected={currentTab[keyToRender] === item[keyToRender]} // TODO: UUID instead of label
          onPress={() => onChangeTab(item)} // TODO: UUID instead of label
        >
          {leftComponent ||
            (item.leftIcon && (
              <SvgXml
                fill={item.leftIconColor || "white"}
                width={item.iconSize || leftIconSize}
                height={item.iconSize || leftIconSize}
                xml={item.leftIcon}
              />
            ))}
          {centralComponent || (
            <StyledText
              fontFamily="roboto-medium"
              color="white"
              fontSize={16}
              style={{ textTransform: "capitalize", paddingHorizontal: 5 }}
            >
              {item[keyToRender] || ""}
            </StyledText>
          )}
          {rightComponent ||
            item.rightComponent ||
            (item.rightIcon && (
              <SvgXml
                fill={item.rightIconColor || "white"}
                width={rightIconSize}
                height={rightIconSize}
                xml={item.rightIcon}
              />
            ))}
        </Item>
      ))}
    </Container>
  );
};

export default TopBar;
