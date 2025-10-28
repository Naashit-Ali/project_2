// CustomButton.js
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import CustomText from './CustomText';
import { fonts } from '../../theme/font';

const COLORS = {
  primary: colors?.primary, // Purple
  transparent: 'transparent',
  border: colors?.white, // Border for transparent

};

const CustomButton = ({
  title,
  onPress,
  variant = 'primary', // 'primary', 'secondary', 'transparent'
  imageSource = null,
  imageSize = 18,
  imageStyle,
  style,
  textStyle,
  disabled = false,
}) => {
  const {width, height} = useWindowDimensions();
  const styles = customStyleSheet(width, height);
  const isTransparent = variant === 'transparent';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      style={[
        styles.button,
        variant === 'primary' && {backgroundColor: COLORS.primary},
        variant === 'secondary' && {backgroundColor: COLORS.secondary},
        isTransparent && {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: COLORS.border,
        },
        style,
      ]}>
      {imageSource && (
        <Image
          source={imageSource}
          style={[
            styles.image,
            {
              width: moderateScale(imageSize, 0.6),
              height: moderateScale(imageSize, 0.6),
              tintColor: isTransparent ? COLORS.border : colors.white,
            },
            imageStyle,
          ]}
          
        />
      )}
      {title && (
        <CustomText
          style={[
            styles.text,
            isTransparent ? {color: COLORS.border} : {color: colors.white},
            textStyle,
          ]}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

const customStyleSheet = (width, height) =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(25, 0.3),
      paddingVertical: moderateScale(16, 0.3),
      paddingHorizontal: moderateScale(20, 0.3),
      gap: moderateScale(8, 0.3),
      width: '100%',
    },
    text: {
      fontSize: moderateScale(16, 0.3),
      fontFamily:fonts?.medium,
      color:colors?.white
    },
    image: {
      resizeMode: 'contain',
    },
  });

export default CustomButton;
