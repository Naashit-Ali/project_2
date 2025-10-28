import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/atoms/CustomButton';
import CustomText from '../components/atoms/CustomText';
import CustomTextInput from '../components/atoms/CustomTextInput';
import SocialLoginButton from '../components/molecules/SocialLoginButton';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import NavigationService from '../navigation/NavigationService';

const SignUpScreen = () => {
  return (
    <ScreenBoiler headerType={2} headerTitle="Back">
      <CustomText style={styles.heading}>
        Get Started With
        <CustomText style={{color: colors?.secondary}}>
          {' '}
          Truth & Friends
        </CustomText>
      </CustomText>
      <CustomTextInput placeholder="Full Name" />
      <CustomTextInput placeholder="Email" />
      <CustomTextInput placeholder="Password" secureText />
      <CustomTextInput placeholder="Confirm Password" secureText />
      <CustomButton title={'Sign Up '}
        onPress={() => {
          NavigationService?.navigate('InfoSteps');
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 24,
        }}>
        <View
          style={{flex: 1, height: 1, backgroundColor: colors?.lightGray}}
        />
        <CustomText
          style={{
            marginHorizontal: 10,
            fontSize: 16,
            color: colors?.lightGray,
          }}>
          OR
        </CustomText>
        <View
          style={{flex: 1, height: 1, backgroundColor: colors?.lightGray}}
        />
      </View>
      <SocialLoginButton variant="Google" />
      <SocialLoginButton variant="Facebook" />
      <SocialLoginButton variant="Instagram" />
    </ScreenBoiler>
  );
};
const styles = StyleSheet.create({
  heading: {
    color: colors?.themeBlack,
    fontSize: moderateScale(24, 0.3),
    fontFamily: fonts?.medium,
    marginBottom: moderateScale(24, 0.3),
    marginTop: moderateScale(16, 0.3),
  },
});
export default SignUpScreen;
