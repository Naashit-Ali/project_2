import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Images from '../../assets/images';
import NavigationService from '../../navigation/NavigationService';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/font';
import CustomImage from '../atoms/CustomImage';
import CustomText from '../atoms/CustomText';

const MainHeader = ({
  isBack = false,
  isMenu = false,
  isSetting = false,
  onPress,
  type =1,
  title = '',
  onPressBack,
}) => {

  const { width, height } = Dimensions.get('window');

  const iconImage = () => {
    if (isSetting) {
      return Images?.search;
    } else if (isMenu) {
      return Images?.menu;
    } else {
      return Images?.notification;
    }
  }

  // const onPressBack = () => {
  //   NavigationService?.goBack()
  // }

  return (
  type == 1 ? <>  <View style={styles.container}>
    {isBack ?
      <TouchableOpacity
        onPress={() => {
          NavigationService?.goBack();
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
        /></TouchableOpacity> :
      <>
        <View style={styles?.profileContainer}>
          <CustomImage
            source={Images?.user}
            resizeMode="cover"
            style={styles?.image}
          />
          <View style={{
          }}>
            <CustomText style={styles?.text1}>Hello</CustomText>
            <CustomText style={styles?.text2}>Alex Carter</CustomText>
          </View>
        </View>
      </>
    }
    <TouchableOpacity
      onPress={onPress}
      style={styles?.rightIconContainer}>
      <CustomImage
        source={iconImage()}
        resizeMode="contain"
        style={{
          width: moderateScale(16, 0.3),
          height: moderateScale(16, 0.3),
        }}
      />
      <View style={styles?.notificationBadge}>
        <CustomText style={styles?.text3}>2</CustomText></View>
    </TouchableOpacity>

  </View></> : 
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
  )

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
    color: colors?.black
  },
  text2: {
    fontSize: moderateScale(18, 0.3),
    fontFamily: fonts?.medium,
    color: colors?.primary
  },
  image: {
    width: moderateScale(40, 0.3),
    height: moderateScale(40, 0.3),
    borderRadius: moderateScale(50, 0.3),
    backgroundColor: colors?.lightGray
  },
  text3: {
    color: colors?.white,
    fontSize: moderateScale(12, 0.3),
    fontFamily: fonts?.bold,
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: colors?.orange,
    borderRadius: moderateScale(50, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(4, 0.3),
    paddingVertical: moderateScale(-1, 0.3),
    zIndex: 1
  },
  rightIconContainer: {
    padding: moderateScale(10, 0.3),
    backgroundColor: colors?.secondary,
     borderRadius: moderateScale(50, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIconContainer: {
    padding: moderateScale(8, 0.3),
    backgroundColor: colors?.white, borderRadius: moderateScale(50, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8, 0.3),
  }
});

export default MainHeader;
