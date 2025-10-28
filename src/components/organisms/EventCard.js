import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../../theme/colors'
import CustomImage from '../atoms/CustomImage'
import Images from '../../assets/images'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'
import CustomButton from '../atoms/CustomButton'
import { globalStyles } from '../../utils/globalStyles'
import NavigationService from '../../navigation/NavigationService'

const EventCard = ({ type = 1 }) => {
  return (
    <TouchableOpacity style={styles?.container} activeOpacity={0.8}
    onPress={() => {
      NavigationService?.navigate('EventDetailScreen');
    }}
    >
      <CustomImage
        source={Images?.welcomeBg}
        resizeMode='cover'
        style={styles?.img}
      />
      <View style={styles?.textContainer}>
        <CustomText style={styles?.title}>Ultimate Fitness</CustomText>
        <CustomText style={styles?.date}>{
          type === 1 ? 'Dec 3rd, 2025' : '30 mins . Beginner'
        }
        </CustomText>
      </View>
      <CustomButton
        title={
          type === 1 ? 'Join Now' : 'View'
        }
        style={
          type === 1 ? styles?.button : [styles?.button, {
            borderRadius: moderateScale(6, 0.3),
          }]}
        textStyle={styles?.buttonText}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '99%',
    padding: moderateScale(16, 0.3),
    backgroundColor: colors?.white,
    borderRadius: moderateScale(12, 0.3),
    gap: moderateScale(6, 0.3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...globalStyles?.elevationStyle,
    alignSelf: 'center',
  },
  img: {
    width: moderateScale(50, 0.3),
    height: moderateScale(50, 0.3),
    borderRadius: moderateScale(8, 0.3),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: moderateScale(18, 0.3),
    color: colors?.themeBlack,
    fontFamily: fonts?.medium,
  },
  date: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.themeBlack,
    fontFamily: fonts?.regular,
  },
  button: {
    backgroundColor: colors?.primary,
    paddingHorizontal: moderateScale(4, 0.3),
    width: moderateScale(90, 0.3),
    height: moderateScale(36, 0.3),
    paddingVertical: moderateScale(6, 0.3),
  },
  buttonText: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.white,
    fontFamily: fonts?.medium,
  },
})


export default EventCard