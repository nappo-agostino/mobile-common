/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";
import { Overlay } from "react-native-elements";
import ModalButton from "./ModalButton";
import theme from "../../styles/theme";
import successIcon from "../../assets/images/customModal/success.svg";
import dangerIcon from "../../assets/images/customModal/error.svg";
import questionIcon from "../../assets/images/customModal/modal-question.svg";
import StyledText from "../StyledText";

const Wrapper = styled(Overlay).attrs(
  ({
    isVisible,
    windowBackgroundColor,
    overlayBackgroundColor,
    overlayWidth,
    overlayHeight,
  }) => ({
    isVisible,
    windowBackgroundColor,
    overlayBackgroundColor,
    width: overlayWidth,
    height: overlayHeight,
    overlayStyle: {
      padding: 0,
      borderRadius: 10,
      overflow: "hidden",
    },
  })
)`
  flex: 1;
  width: "100%";
`;

const ButtonModalContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  /* padding-vertical: 10px; */
  padding-top: 20px;
  width: 100%;
`;

const modalClasses = {
  question: {
    icon: questionIcon,
    iconColor: theme.colors.secondaryColor,
  },
  success: {
    gradientColors: [
      theme.colors.firstModalSuccessColor,
      theme.colors.secondModalSuccessColor,
    ],
    primaryColor: theme.colors.green,
    icon: successIcon,
    iconColor: theme.colors.secondaryColor,
  },
  primary: {
    gradientColors: [theme.colors.secondaryColor, theme.colors.primaryColor],

    primaryColor: theme.colors.primaryColor,
    icon: null,
    iconColor: theme.colors.secondaryColor,
  },
  notAvailable: {
    gradientColors: [
      theme.colors.firstModalNotAvailableColor,
      theme.colors.secondModalNotAvailableColor,
    ],
    primaryColor: theme.colors.firstModalNotAvailableColor,
    icon: dangerIcon,
    iconColor: theme.colors.secondaryColor,
  },
  error: {
    gradientColors: [
      theme.colors.firstModalDangerColor,
      theme.colors.secondModalDangerColor,
    ],
    primaryColor: theme.colors.firstModalDangerColor,
    icon: dangerIcon,
    iconColor: theme.colors.firstModalDangerColor,
  },
  pending: {
    gradientColors: [
      theme.colors.firstModalPendingColor,
      theme.colors.secondModalPendingColor,
    ],
    primaryColor: theme.colors.firstModalPendingColor,
    icon: dangerIcon,
    iconColor: theme.colors.secondaryColor,
  },
  optioned: {
    gradientColors: [
      theme.colors.firstModalOptionedColor,
      theme.colors.secondModalOptionedColor,
    ],
    primaryColor: theme.colors.firstModalOptionedColor,
    icon: dangerIcon,
    iconColor: theme.colors.secondaryColor,
  },
};

const Modal = (props) => {
  const {
    modalClass,
    headerIcon,
    content,
    headerContent,
    title,
    titleStyle,
    text,
    textStyle,
    isVisible,
    width = "90%",
    onBackdropPress,
    windowBackgroundColor = theme.colors.backdropColor,
    overlayBackgroundColor,
    actionButtons,
    onButtonPress,
    onCancelPress,
    cancelText,
    submitText,
  } = props;

  return (
    <Wrapper
      isVisible={isVisible}
      windowBackgroundColor={windowBackgroundColor}
      overlayBackgroundColor={overlayBackgroundColor}
      overlayWidth={width}
      overlayHeight="auto"
      //   overlayHeight={height}
      onBackdropPress={onBackdropPress}
    >
      <>
        {modalClass && (
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
            }}
          >
            {headerContent || (
              <SvgXml
                width={52}
                height={39}
                xml={headerIcon || modalClasses[modalClass].icon}
                fill={modalClasses[modalClass].iconColor}
              />
            )}
          </View>
        )}
        <View style={{ padding: 20 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {title && (
              <StyledText
                fontFamily="roboto-bold"
                fontSize={20}
                uppercase
                style={{
                  textAlign: "center",
                  ...titleStyle,
                }}
              >
                {title}
              </StyledText>
            )}

            {text && (
              <StyledText
                fontFamily="roboto-bold"
                fontSize={20}
                capitalize
                style={{
                  textAlign: "center",
                  ...textStyle,
                }}
              >
                {text}
              </StyledText>
            )}
            {content}
          </View>

          <ButtonModalContainer
            style={actionButtons && { justifyContent: "center" }}
          >
            {actionButtons || (
              <>
                <ModalButton color="red" onPress={onCancelPress}>
                  {cancelText || "cancel"}
                </ModalButton>
                <ModalButton color="green" onPress={onButtonPress}>
                  {submitText || "continue"}
                </ModalButton>
              </>
            )}
          </ButtonModalContainer>
        </View>
      </>
    </Wrapper>
  );
};

export default Modal;

// Modal.propTypes = {
//   width: PropTypes.number,
//   height: PropTypes.number,
//   title: PropTypes.string,
//   text: PropTypes.string,
//   icon: PropTypes.any,
//   modalClass: PropTypes.oneOf(Object.keys(modalClasses)),
//   iconSize: PropTypes.number,
//   titleStyle: PropTypes.instanceOf(Object),
//   textStyle: PropTypes.instanceOf(Object),
//   actionButtons: PropTypes.arrayOf(Button)
// };
