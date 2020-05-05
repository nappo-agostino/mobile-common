import React from "react";
import { Image } from "react-native";

const PublicImage = ({ SERVER_URL, imagePath, imageStyle }) => {
  return (
    <Image
      style={{ height: "100%", width: "100%", ...imageStyle }}
      source={{ uri: `${SERVER_URL}${imagePath}` }}
    />
  );
};

export default PublicImage;
