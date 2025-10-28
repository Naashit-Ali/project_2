import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Images from '../assets/images';
import IconWithText from '../components/atoms/IconWithText';
import MainHeader from '../components/organisms/MainHeader';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import {colors} from '../theme/colors';
import CustomText from '../components/atoms/CustomText';
import {fonts} from '../theme/font';
import CustomImage from '../components/atoms/CustomImage';
import CustomButton from '../components/atoms/CustomButton';

const EventDetailScreen = () => {
  return (
    <ScreenBoiler
      showHeader={false}
      hidden
      mainContainerStyle={styles.screenContainer}
      barStyle="dark-content">
      <ImageBackground
        source={Images?.banner}
        style={styles.bannerImage}
        resizeMode="cover">
        <MainHeader isBack headerOneStyle={styles.headerStyle} />
      </ImageBackground>

      <View style={styles.contentContainer}>
        <CustomText style={styles.heading}>Ultimate Fitness</CustomText>
        <View style={styles.rowContainer}>
          <IconWithText
            image={Images?.calendar}
            text="Dec 20, 2025"
            gap={moderateScale(4, 0.3)}
          />
          <IconWithText
            image={Images?.clock}
            text="01:00 am"
            gap={moderateScale(4, 0.3)}
          />
        </View>
        <View style={styles.hostContainer}>
          <CustomImage source={Images?.user} style={styles.hostImage} />
          <View style={styles.hostInfo}>
            <CustomText style={styles.hostName}>John Doe</CustomText>
            <CustomText style={styles.hostRole}>Event Host</CustomText>
          </View>
          <CustomImage source={Images?.chatBubble} style={styles.chatIcon} />
        </View>
        <CustomText style={styles.heading2}>Description</CustomText>
        <CustomText style={styles.description}>
          A growth mindset is the belief that abilities and intelligence can be
          developed through dedication and hard work.{' '}
        </CustomText>
        <CustomButton title={'Join Live'} style={styles.joinButton} />
      </View>
    </ScreenBoiler>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 0,
  },
  bannerImage: {
    width: '100%',
    height: moderateScale(200, 0.3),
    alignItems: 'center',
  },
  headerStyle: {
    width: '90%',
    marginTop: moderateScale(10, 0.3),
  },
  contentContainer: {
    backgroundColor: colors.whiteV2,
    flex: 1,
    borderRadius: moderateScale(20, 0.3),
    marginTop: -moderateScale(10, 0.3),
    padding: moderateScale(24, 0.3),
  },
  heading: {
    fontSize: moderateScale(16, 0.3),
    color: colors.themeBlack,
    fontFamily: fonts.medium,
    marginBottom: moderateScale(8, 0.3),
  },
  heading2: {
    fontSize: moderateScale(12, 0.3),
    color: colors.themeBlack,
    fontFamily: fonts.medium,
    marginBottom: moderateScale(8, 0.3),
  },
  description: {
    fontSize: moderateScale(14, 0.3),
    color: colors.darkGray,
    fontFamily: fonts.regular,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8, 0.3),
    marginTop: moderateScale(10, 0.3),
  },
  hostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8, 0.3),
    marginTop: moderateScale(22, 0.3),
    marginBottom: moderateScale(22, 0.3),
  },
  hostImage: {
    width: moderateScale(50, 0.3),
    height: moderateScale(50, 0.3),
    borderRadius: moderateScale(25, 0.3),
  },
  hostInfo: {
    flex: 1,
    gap: moderateScale(4, 0.3),
  },
  hostName: {
    fontSize: moderateScale(14, 0.3),
    color: colors.themeBlack,
    fontFamily: fonts.semiBold,
  },
  hostRole: {
    fontSize: moderateScale(12, 0.3),
    color: colors.themeBlack,
    fontFamily: fonts.regular,
  },
  chatIcon: {
    width: moderateScale(50, 0.3),
    height: moderateScale(50, 0.3),
    borderRadius: moderateScale(25, 0.3),
  },
  joinButton: {
    position: 'absolute',
    bottom: 100,
    left: moderateScale(24, 0.3),
    right: moderateScale(24, 0.3),
  },
});

export default EventDetailScreen;
