import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";

const AutoHeightImage = ({ source }) => {
  const [imageHeight, setImageHeight] = useState(null);

  const handleImageLoad = (event) => {
    const { height } = event.nativeEvent.source;
    setImageHeight(height);
  };

  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={[styles.image, { height: imageHeight }]}
        onLoad={handleImageLoad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
});

export default AutoHeightImage;
