import React from "react";
import { View } from "react-native";
import Parallax from "../../components/shared/parallax/Parallax";
import { StyledText } from "../../components/shared";
import { image } from "../../utils/costants";

const ParallaxExample = () => {
  return (
    <View style={{ flex: 1 }}>
      <Parallax
        title="title"
        subtitle="subtitle"
        image={image}
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
