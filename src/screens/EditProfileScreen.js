import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Images from '../assets/images';
import CustomButton from '../components/atoms/CustomButton';
import CustomImage from '../components/atoms/CustomImage';
import CustomTextInput from '../components/atoms/CustomTextInput';
import CustomDropdown from '../components/organisms/CustomDropdown';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import { colors } from '../theme/colors';
import { fonts } from '../theme/font';

const EditProfileScreen = () => {
  return (
    <ScreenBoiler headerType={1} isBack>

      <View style={styles.profileImageContainer}>
        <CustomImage
          source={Images?.user}
          style={styles?.profileImage}
          resizeMode="contain"
        />
        <CustomImage
          source={Images?.pencil}
          resizeMode="contain"
          style={styles?.editIcon}
        />
      </View>

      <CustomTextInput placeholder="Fullname" />
      <CustomTextInput placeholder="Username" />
      <CustomTextInput
        placeholder="Bio"
        multiline
        inputStyle={{
          height: moderateScale(100, 0.3),
          textAlignVertical: 'top',
        }}
      />

      <CustomDropdown 
        label={'Fitness Goal'}
        placeholder={'I want to lose weight'}
      />

      <CustomButton
        title={`Save Changes`}
        style={{marginTop: moderateScale(24, 0.3)}}
        onPress={() => {
          //   NavigationService?.navigate('BottomNavigation');
        }}
      />
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
  profileText: {
    color: colors?.lightGray,
    fontSize: moderateScale(14, 0.3),
    fontFamily: fonts?.regular,
  },
  profileImage: {
    width: moderateScale(100, 0.3),
    height: moderateScale(100, 0.3),
    backgroundColor: colors?.lightGray,
    borderRadius: moderateScale(50, 0.3),
    marginBottom: moderateScale(8, 0.3),
  },
  profileImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(24, 0.3),
    width: '30%',
    alignSelf: 'center',
    marginTop: moderateScale(24, 0.3),
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    width: moderateScale(30, 0.3),
    height: moderateScale(30, 0.3),
    borderColor: colors?.lightGray,
    borderWidth: 1,
    borderRadius: moderateScale(15, 0.3),
  
  },
});

export default EditProfileScreen;
