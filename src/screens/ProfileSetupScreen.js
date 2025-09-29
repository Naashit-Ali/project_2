import React from 'react'
import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Images from '../assets/images'
import CustomButton from '../components/atoms/CustomButton'
import CustomImage from '../components/atoms/CustomImage'
import CustomText from '../components/atoms/CustomText'
import CustomTextInput from '../components/atoms/CustomTextInput'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import { colors } from '../theme/colors'
import { fonts } from '../theme/font'
import CustomDropdown from '../components/organisms/CustomDropdown'

const ProfileSetupScreen = () => {
  return (
    <ScreenBoiler headerType={2} headerTitle="Back">
      <CustomText style={styles.heading}>
        Profile Setup
      </CustomText>

      <View style={styles.profileImageContainer}>

        <CustomImage
          source={Images?.logo}
          style={styles?.profileImage}
          resizeMode="contain"
        />

        <CustomText style={styles?.profileText}>
          Maximize file size is 3MB
        </CustomText>

      </View>

      <CustomTextInput placeholder="Username" />
      <CustomTextInput placeholder="Bio" inputStyle={{
        height: moderateScale(100, 0.3),
        textAlignVertical: 'top',
      }} />

      <CustomDropdown
      placeholder={'Wellness Goal'}
      />

      <CustomButton
        title={`Let's Go!`}
      />

    </ScreenBoiler>

  )
}

const styles = StyleSheet.create({
  heading: {
    color: colors?.themeBlack,
    fontSize: moderateScale(24, 0.3),
    fontFamily: fonts?.medium,
    marginBottom: moderateScale(24, 0.3),
    marginTop: moderateScale(16, 0.3),
  },
  profileText: {
    color: colors?.lightGray,
    fontSize: moderateScale(14, 0.3),
    fontFamily: fonts?.regular,
  },
  profileImage: {
    width: moderateScale(100, 0.3), height: moderateScale(100, 0.3),
    backgroundColor: colors?.lightGray, borderRadius: moderateScale(50, 0.3),
    marginBottom: moderateScale(8, 0.3),
  },
  profileImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(24, 0.3),
    width: '50%',
    alignSelf: 'center',
  }
});

export default ProfileSetupScreen