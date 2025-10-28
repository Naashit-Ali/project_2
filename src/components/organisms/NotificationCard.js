import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  background,
  color,
} from 'native-base/lib/typescript/theme/styled-system';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../atoms/CustomImage';
import Images from '../../assets/images';
import CustomText from '../atoms/CustomText';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/font';
import { globalStyles } from '../../utils/globalStyles';

const NotificationCard = ({item = {}}) => {
  return (
    <TouchableOpacity style={styles?.container} activeOpacity={0.8}>
      <View style={styles?.imgContainer}>
        <CustomImage
          source={item?.image}
          resizeMode="contain"
          style={styles?.img}
        />
      </View>

      <View style={{flex: 1, marginLeft: moderateScale(12, 0.3)}}>
        <CustomText style={styles?.title}>{item?.title}</CustomText>
        <CustomText style={styles?.date}>{item?.description}</CustomText>
      </View>

      <CustomText style={styles?.time}>{item?.duration}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet?.create({
  container: {
    backgroundColor: colors?.white,
    width: '99%',
    alignSelf:'center',
    borderRadius: moderateScale(12, 0.3),
    padding: moderateScale(16, 0.3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...globalStyles?.elevationStyle
  },
  img: {
    width: moderateScale(20, 0.3),
    height: moderateScale(20, 0.3),
  },
  imgContainer: {
    width: moderateScale(40, 0.3),
    height: moderateScale(40, 0.3),
    borderRadius: moderateScale(30, 0.3),
    backgroundColor: '#EEE6FF',
    padding: moderateScale(6, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.themeBlack,
    fontFamily: fonts?.medium,
  },
  date: {
    fontSize: moderateScale(12, 0.3),
    color: colors?.grayV2,
    fontFamily: fonts?.medium,
  },
  time: {
    fontSize: moderateScale(12, 0.3),
    color: colors?.grayV2,
    fontFamily: fonts?.medium,
    alignSelf: 'flex-start',
  },
});

export default NotificationCard;
