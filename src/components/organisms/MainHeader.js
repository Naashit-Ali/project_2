import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Images from '../../assets/images';
import NavigationService from '../../navigation/NavigationService';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/font';
import CustomImage from '../atoms/CustomImage';
import CustomText from '../atoms/CustomText';
import {useNavigation} from '@react-navigation/native';

const MainHeader = ({
  isBack = false,
  isMenu = false,
  isSetting = false,
  type = 1,
  title = '',
  onPressBack,
  headerOneStyle = {},
}) => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');

  const openDrawer = () => {
    navigation.openDrawer?.();
  };

  const iconImage = () => {
    if (isSetting) {
      return Images?.settings;
    } else if (isMenu) {
      return Images?.menu;
    } else {
      return Images?.notification;
    }
  };

  // const onPressBack = () => {
  //   NavigationService?.goBack()
  // }

  return type == 1 ? (
    <>
      <View style={[styles.container,headerOneStyle]}>
        {isBack ? (
          <TouchableOpacity
            onPress={() => {
              navigation?.goBack();
            }}
            style={styles?.backIconContainer}>
            <CustomImage
              isPressable
              onPress={onPressBack}
              source={Images?.arrowLeft}
              resizeMode="contain"
              style={{
                width: moderateScale(15, 0.3),
                height: moderateScale(15, 0.3),
              }}
            />
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={styles?.profileContainer}
              onPress={openDrawer}
              activeOpacity={0.7}>
              <CustomImage
                source={Images?.user}
                resizeMode="cover"
                style={styles?.image}
              />
              <View style={{}}>
                <CustomText style={styles?.text1}>Hello</CustomText>
                <CustomText style={styles?.text2}>Alex Carter</CustomText>
              </View>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity
          onPress={() => {
            if (isSetting) {
              NavigationService?.navigate('SettingScreen');
            } else if (isMenu) {
              NavigationService?.navigate('EditProfileScreen');
            } else {
              NavigationService?.navigate('NotificationScreen');
            }
          }}
          style={styles?.rightIconContainer}>
          <CustomImage
            source={iconImage()}
            resizeMode="contain"
            style={{
              width: moderateScale(16, 0.3),
              height: moderateScale(16, 0.3),
            }}
          />
          {!isSetting && !isMenu && (
            <View style={styles?.notificationBadge}>
              <CustomText style={styles?.text3}>2</CustomText>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </>
  ) : (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: moderateScale(10, 0.3),
          gap: moderateScale(5, 0.3),
        }}>
        <CustomImage
          isPressable
          onPress={onPressBack}
          source={Images?.arrowLeft}
          resizeMode="contain"
          style={{
            width: moderateScale(15, 0.3),
            height: moderateScale(15, 0.3),
          }}
        />
        <CustomText
          onPress={onPressBack}
          style={{
            fontSize: moderateScale(18, 0.3),
            fontFamily: fonts?.medium,
            color: colors?.themeBlackV2,
          }}>
          {title}
        </CustomText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(55, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: moderateScale(16, 0.3), // check
    backgroundColor: 'transparent',
  },
  text1: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: fonts?.regular,
    color: colors?.black,
  },
  text2: {
    fontSize: moderateScale(18, 0.3),
    fontFamily: fonts?.medium,
    color: colors?.primary,
  },
  image: {
    width: moderateScale(40, 0.3),
    height: moderateScale(40, 0.3),
    borderRadius: moderateScale(50, 0.3),
    backgroundColor: colors?.lightGray,
  },
  text3: {
    color: colors?.white,
    fontSize: moderateScale(10, 0.3),
    fontFamily: fonts?.bold,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors?.orange,
    borderRadius: moderateScale(50, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(4, 0.3),
    paddingVertical: moderateScale(-1, 0.3),
    zIndex: 1,
  },
  rightIconContainer: {
    padding: moderateScale(10, 0.3),
    backgroundColor: colors?.secondary,
    borderRadius: moderateScale(50, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  backIconContainer: {
    padding: moderateScale(8, 0.3),
    backgroundColor: colors?.white,
    borderRadius: moderateScale(50, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8, 0.3),
  },
});

export default MainHeader;
