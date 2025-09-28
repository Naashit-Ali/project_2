import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../assets/images';
import CustomText from '../components/atoms/CustomText';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/atoms/CustomButton';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import CustomImage from '../components/atoms/CustomImage';
import NavigationService from '../navigation/NavigationService';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={Images.welcomeBg}
      style={styles.container}
      resizeMode="cover">
      <CustomImage
        source={Images.whitLogo}
        style={styles.logo}
        resizeMode="contain"
      />
      <LinearGradient
        colors={['rgba(44, 26, 136, 0.4)', 'rgba(44, 26, 136, 0.7)', '#271D5A']}
        locations={[0, 0.5, 1]}
        style={styles.overlay}>
        <CustomText style={styles.welcomeText}>
          Welcome To Truth and friend
        </CustomText>
        <CustomText style={styles.description}>
          With support from millions, tap into our motivation and find your
          strength
        </CustomText>
        <CustomButton
          title={'Sign Up'}
          onPress={() => {
            NavigationService?.navigate('SignUpScreen');
          }}
        />
        <CustomButton
          title={'Login'}
          variant="transparent"
          style={{marginTop: moderateScale(10, 0.3)}}
        />
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: moderateScale(24, 0.3),
    paddingBottom: moderateScale(30, 0.3),
  },
  welcomeText: {
    fontSize: moderateScale(32, 0.3),
    color: colors?.white,
    fontFamily: fonts?.medium,
    textAlign: 'center',
    marginBlock: moderateScale(16, 0.3),
    width: '80%',
  },
  description: {
    fontSize: moderateScale(16, 0.3),
    color: colors?.white,
    fontFamily: fonts?.regular,
    textAlign: 'center',
    marginBlock: moderateScale(24, 0.3),
  },
  logo: {
    width: moderateScale(100, 0.3),
    height: moderateScale(100, 0.3),
    position: 'absolute',
    top: moderateScale(50, 0.3),
    left: moderateScale(24, 0.3),
    zIndex: 10,
  },
});

export default WelcomeScreen;
