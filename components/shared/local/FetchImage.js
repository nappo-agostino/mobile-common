import React, { useState, useEffect, useContext } from "react";
import { Image, View } from "react-native";
import { Buffer } from "buffer";
import axios from "axios";
import keys from "../../../keys";

import { AuthContext } from "../../../contexts/AuthContext";

const FetchImage = ({ imagePath }) => {
  const authContext = useContext(AuthContext);
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (imagePath) {
      axios
        .get(`${keys.GRAPHQL_URL}${imagePath}`, {
          responseType: "arraybuffer",
          headers: { Authorization: `Bearer ${authContext.user.access_token}` }
        })
        .then(response => {
          const base64 = new Buffer(response.data, "binary").toString("base64");
          const ext = imagePath.split(".").pop();
          const newImage = `data:image/${ext};base64,${base64}`;
          setImage(newImage);
        })
        .catch(err => {
          // debugger;
          console.log("err", err);
          // console.log('err', JSON.stringify(err));
        });
    }
  }, []);
  return image ? (
    <Image style={{ height: "100%", width: "100%" }} source={{ uri: image }} />
  ) : (
    <View style={{ height: "100%", width: "100%", backgroundColor: "black" }} />
  );
  // return null;
};
export default FetchImage;
