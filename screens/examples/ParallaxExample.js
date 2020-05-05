import React from "react";
import { View } from "react-native";
import Parallax from "../../components/shared/parallax/Parallax";
import { StyledText } from "../../components/shared";

const ParallaxExample = () => {
  return (
    <View style={{ flex: 1 }}>
      <Parallax
        title="title"
        subtitle="subtitle"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        // parallaxHeaderHeight={300}
      >
        <View>
          <StyledText>children</StyledText>
        </View>
      </Parallax>
    </View>
  );
};

export default ParallaxExample;
