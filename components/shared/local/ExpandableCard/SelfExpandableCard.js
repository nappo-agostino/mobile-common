import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Platform } from "react-native";
import { TranslateTextComponent } from "../../../../translator";

const Wrapper = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 20px;
`;

const TouchableHeader = styled.TouchableOpacity.attrs({})`
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  border-width: ${(props) => props.theme.borderCardWith}px;
  border-color: ${({ theme: { colors } }) => colors.borderColor};
  padding: 10px;
  background-color: white;
  z-index: 5;
`;

const Header = styled.View.attrs({})`
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  border-width: ${(props) => props.theme.borderCardWith}px;
  border-color: ${({ theme: { colors } }) => colors.borderColor};
  padding: 10px;
  background-color: white;
`;

const Content = styled.View`
  margin-top: -20px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-top: 30px;
  padding-bottom: ${Platform.OS === "android" ? "10px" : "20px"};
  padding-horizontal: 15px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-color: ${({ theme: { colors } }) => colors.borderColor};
  /* ${({ expandable }) => {
    if (expandable)
      return css`
        margin-top: -20px;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        padding-top: 30px;
        padding-bottom: ${Platform.OS === "android" ? "10px" : "20px"};
        padding-horizontal: 15px;
        border-left-width: 1px;
        border-right-width: 1px;
        border-top-width: 0px;
        border-bottom-width: 1px;
        border-color: ${({ theme: { colors } }) => colors.borderColor};
      `;
  }} */
`;

const SelfExpandableCard = ({
  disabled,
  isExpanded,
  children,
  wrapperStyle,
  contentStyle,
  headerContent,
  headerIcon,
  headerIconColor,
  headerTitle,
  headerStyle,
  headerTextStyle,
  expandable = true,
  onExpanse,
  onPress,
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [expanded, setExpanded] = useState(isExpanded || false);

  useEffect(() => {
    if (onExpanse) onExpanse(expanded);
  }, [expanded]);
  return (
    (expandable && (
      <Wrapper style={wrapperStyle} disabled={disabled}>
        <TouchableHeader
          disabled={disabled}
          style={headerStyle}
          onLayout={(layout) =>
            setHeaderHeight(layout.nativeEvent.layout.height)
          }
          onPress={() => setExpanded((prev) => !prev)}
        >
          {headerContent || (
            <>
              <SvgXml
                fill={headerIconColor}
                width={30}
                height={30}
                xml={headerIcon}
                style={{ marginRight: 10 }}
              />
              <TranslateTextComponent capitalize style={headerTextStyle}>
                {headerTitle}
              </TranslateTextComponent>
            </>
          )}
        </TouchableHeader>
        {expanded && (
          <Content headerHeight={headerHeight} expanded={expanded} expandable>
            {children}
          </Content>
        )}
      </Wrapper>
    )) || (
      <Wrapper style={wrapperStyle} onPress={onPress} disabled={disabled}>
        <Header
          disabled={disabled}
          style={headerStyle}
          onLayout={(layout) =>
            setHeaderHeight(layout.nativeEvent.layout.height)
          }
          onPress={() => {}}
        >
          {headerContent || (
            <>
              <SvgXml
                fill={headerIconColor}
                width={30}
                height={30}
                xml={headerIcon}
                style={{ marginRight: 10 }}
              />
              <TranslateTextComponent capitalize style={headerTextStyle}>
                {headerTitle}
              </TranslateTextComponent>
            </>
          )}
        </Header>
        {children && (
          <Content
            headerHeight={headerHeight}
            expanded={expanded}
            expandable={false}
            style={contentStyle}
          >
            {children}
          </Content>
        )}
      </Wrapper>
    )
  );
};

export default SelfExpandableCard;
