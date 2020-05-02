import React, { useContext } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import { TranslateTextComponent } from "../../../translator";
import theme from "../../../styles/theme";
import { ModalContext } from "../../../contexts/ModalContext";

import attachmentIcon from "../../../assets/images/check-in/contactInfo/attachment.svg";
import FetchImage from "./FetchImage";
import { decodeBase64 } from "../../../utils/mediaUtils";

const PhotoOverlay = ({ image }) => {
  const modalContext = useContext(ModalContext);
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={() =>
        modalContext.openModal({
          content: (
            <Image
              source={{
                uri: image.uri,
              }}
              style={{ height: 300, width: "100%" }}
            />
          ),

          actionButtons: [],
        })
      }
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <SvgXml
          width={15}
          height={15}
          xml={attachmentIcon}
          style={{ marginRight: 5 }}
        />
      </View>
      <TranslateTextComponent
        style={{ textDecorationLine: "underline", textTransform: "capitalize" }}
        color={theme.colors.secondaryColor}
      >
        view-photo
      </TranslateTextComponent>
    </TouchableOpacity>
  );
};

export default PhotoOverlay;
