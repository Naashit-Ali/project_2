// TextPill.js
import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters';
import CustomText from '../atoms/CustomText';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/font';

const TextPill = ({ title, onPress, isSelected, id }) => {
  const { width, height } = useWindowDimensions();
  const styles = customStyleSheet(width, height);

  const handlePress = () => {
    if (onPress) {
      onPress(id);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.textPill,
        isSelected && styles.selectedPill
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <CustomText style={[styles.textPillText, isSelected && styles.selectedPillText]}>{title}</CustomText>
    </TouchableOpacity>
  )
}

const customStyleSheet = (width, height) => StyleSheet.create({
  textPill: {
    paddingHorizontal: moderateScale(15, 0.3),
    paddingVertical: moderateScale(12, 0.3),
    borderRadius: moderateScale(25, 0.5),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors?.grayV2,
  },
  selectedPill: {
    backgroundColor: colors?.primary,
    borderColor: colors?.primary,
    borderWidth: 1,
  },
  textPillText: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.gray,
    textAlign: 'center',
    fontFamily: fonts?.medium
  }
  ,
  selectedPillText: {
    color: colors?.white
  }
});

export default TextPill;