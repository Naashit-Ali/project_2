import React from 'react';
import {View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/font';

const IconWithText = ({
  image,
  text,
  iconStyle = {},
  textStyle = {},
  containerStyle = {},
  gap = moderateScale(8, 0.3),
}) => {
  return (
    <View style={[styles.container, {gap}, containerStyle]}>
      <CustomImage source={image} style={[styles.imageIcon, iconStyle]} />
      <CustomText style={[styles.text, textStyle]}>{text}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageIcon: {
    width: moderateScale(24, 0.3),
    height: moderateScale(24, 0.3),
    tintColor: colors.secondary,
  },
  text: {
    fontSize: moderateScale(12, 0.3),
    color: colors.darkGray,
    fontFamily: fonts.regular,
  },
});

export default IconWithText;
