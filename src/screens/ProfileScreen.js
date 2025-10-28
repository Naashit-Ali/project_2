import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Images from '../assets/images';
import CustomButton from '../components/atoms/CustomButton';
import CustomImage from '../components/atoms/CustomImage';
import CustomText from '../components/atoms/CustomText';
import SafeFlatList from '../components/atoms/SafeFlatList';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import { colors } from '../theme/colors';
import { fonts } from '../theme/font';
import { globalStyles } from '../utils/globalStyles';
import UploadImage from '../components/organisms/UploadImage';

const ProfileScreen = (props) => {
    console.log("🚀 ~ ProfileScreen ~ props:", props?.route)
    const {editProfile} = props?.route?.params || false;
    console.log("🚀 ~ ProfileScreen ~ editProfile:", editProfile)
  const Card = ({title, Image}) => {
    return (
      <View
        style={{
          width: '100%',
          marginTop: moderateScale(16, 0.3),
        }}>
        <CustomText style={styles?.heading2}>
          30 days fitness challenge accepted
        </CustomText>
        <CustomImage
          source={Images?.welcomeBg}
          style={styles?.cardImg}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <ScreenBoiler
      isBack
      isMenu
      headerOneStyle={{paddingHorizontal: moderateScale(24, 0.3)}}
      mainContainerStyle={{
        paddingHorizontal: moderateScale(0, 0.3),
      }}>
      <View style={styles?.profileContainer}>
        <CustomImage
          source={Images?.user}
          style={styles?.img}
          resizeMode="cover"
        />
        <CustomText style={styles?.name}>Alex Carter</CustomText>
        <CustomText style={styles?.email}>alexCarter@gmail.com</CustomText>
        <CustomText
          style={[
            styles?.name,
            {
              marginTop: moderateScale(24, 0.3),
            },
          ]}>
          Fitness Goal
        </CustomText>
        <CustomText style={styles?.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CustomText>

        {editProfile && (
          <CustomButton title={'Edit Profile'}
          onPress={() => {
            props?.navigation?.navigate('EditProfileScreen')
          }}
          style={styles?.button} />
        )}
      </View>

      <View style={styles?.container}>
        <CustomText style={styles?.name}>Fitness achievement</CustomText>

        <SafeFlatList
          data={[1, 2]}
          renderItem={() => <Card />}
          contentContainerStyle={styles?.scrollContainer}
        />
        <UploadImage/>
      </View>
    </ScreenBoiler>
  );
};

const styles = StyleSheet?.create({
  profileContainer: {
    width: '100%',
    marginTop: moderateScale(50, 0.3),
    alignItems: 'center',
    paddingHorizontal: moderateScale(24, 0.3),
  },
  img: {
    width: moderateScale(100, 0.3),
    height: moderateScale(100, 0.3),
    borderRadius: moderateScale(50, 0.3),
  },
  name: {
    fontSize: moderateScale(16, 0.3),
    marginTop: moderateScale(16, 0.3),
    color: colors?.themeBlack,
    fontFamily: fonts?.bold,
  },
  email: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.grayV2,
    fontFamily: fonts?.regular,
    marginBottom: moderateScale(30, 0.3),
  },
  description: {
    fontSize: moderateScale(14, 0.3),
    marginTop: moderateScale(4, 0.3),
    color: colors?.grayV2,
    fontFamily: fonts?.regular,
    textAlign: 'center',
  },
  button: {
    marginTop: moderateScale(16, 0.3),
  },
  container: {
    width: '100%',
    backgroundColor: colors?.white,
    padding: moderateScale(24, 0.3),
    borderTopLeftRadius: moderateScale(24, 0.3),
    borderTopRightRadius: moderateScale(24, 0.3),
    marginTop: moderateScale(32, 0.3),
    gap: moderateScale(16, 0.3),
    margninHorizontal: -moderateScale(16, 0.3),
    ...globalStyles?.elevationStyle,
  },
  cardImg: {
    width: '100%',
    height: moderateScale(170, 0.3),
    borderRadius: moderateScale(12, 0.3),
    marginTop: moderateScale(10, 0.3),
  },
  scrollContainer: {
    gap: moderateScale(12, 0.3),
    paddingBottom: moderateScale(20, 0.3),
  },
});

export default ProfileScreen;
