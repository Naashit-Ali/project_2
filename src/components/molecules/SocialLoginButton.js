import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Images from '../../assets/images';
import CustomImage from '../atoms/CustomImage';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/font';

const SocialLoginButton = ({
  variant = 'Google', // 'Google', 'Facebook', 'Instagram'
}) => {
  const socialImage = {
    google: Images?.google,
    facebook: Images?.facebook,
    instagram: Images?.insta,
  };
  const backgroundColors = {
    google: colors?.green,
    facebook: colors?.blue,
    instagram: colors?.instagram,
  };

  const currentColor = backgroundColors[variant?.toLowerCase()] || colors?.green;
  const currentImage = socialImage[variant?.toLowerCase()] || Images?.google;

  return (
    <View style={styles.container}>
      {/* Background with opacity */}
      <View
        style={[
          styles.background,
          { backgroundColor: currentColor }
        ]}
      />

      {/* Content without opacity */}
      <View style={styles.content}>
        <CustomImage
          source={currentImage}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={[styles.text, { color: currentColor }]}>
          Continue with {variant}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(50, 0.3),
    width: '100%',
    borderRadius: moderateScale(32, 0.3),
    marginBottom: moderateScale(8, 0.3),
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: moderateScale(32, 0.3),
    opacity: 0.1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.3),
    zIndex: 1,
  },
  icon: {
    width: moderateScale(30, 0.3),
    height: moderateScale(40, 0.3),
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: moderateScale(16, 0.3),
    fontFamily: fonts?.medium,
  },
});

export default SocialLoginButton;
