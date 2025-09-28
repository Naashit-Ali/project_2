import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

const CustomImage = ({
  source,
  style,
  resizeMode = 'cover',
  isPressable = false,
  onPress,
  ...rest
}) => {
  if (isPressable) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <Image
          source={source}
          style={style}
          resizeMode={resizeMode}
          {...rest}
        />
      </Pressable>
    );
  }

  return (
    <Image
      source={source}
      style={style}
      resizeMode={resizeMode}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default CustomImage;
