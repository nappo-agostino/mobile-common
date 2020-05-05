import React from "react";
import { ScrollView } from "react-native";
import { ImageCard } from "../../components/shared";
import { image } from "../../utils/costants";

const ImageCardExample = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageCard text="text" image={image} textPosition="top" />
      <ImageCard text="text" image={image} textPosition="top-left" />
      <ImageCard text="text" image={image} textPosition="top-right" />

      <ImageCard text="text" image={image} textPosition="center" />
      <ImageCard text="text" image={image} textPosition="center-left" />
      <ImageCard text="text" image={image} textPosition="center-right" />

      <ImageCard text="text" image={image} textPosition="bottom" />
      <ImageCard text="text" image={image} textPosition="bottom-left" />
      <ImageCard text="text" image={image} textPosition="bottom-right" />
    </ScrollView>
  );
};

export default ImageCardExample;
