import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../theme/colors';

const FontTest = () => {
  const fontVariants = [
    { name: 'GeneralSans-Regular', weight: 'normal' },
    { name: 'GeneralSans-Medium', weight: '500' },
    { name: 'GeneralSans-Semibold', weight: '600' },
    { name: 'GeneralSans-Bold', weight: 'bold' },
    { name: 'GeneralSans-Italic', weight: 'normal', style: 'italic' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Font Test - GeneralSans Family</Text>

      {fontVariants.map((font, index) => (
        <View key={index} style={styles.fontContainer}>
          <Text style={styles.label}>
            {font.name} (Weight: {font.weight})
          </Text>
          <Text
            style={[
              styles.testText,
              {
                fontFamily: font.name,
                fontWeight: font.weight,
                fontStyle: font.style || 'normal',
              },
            ]}
          >
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text
            style={[
              styles.numberText,
              {
                fontFamily: font.name,
                fontWeight: font.weight,
                fontStyle: font.style || 'normal',
              },
            ]}
          >
            1234567890
          </Text>
        </View>
      ))}

      <View style={styles.fallbackContainer}>
        <Text style={styles.label}>System Font (Fallback):</Text>
        <Text style={styles.testText}>
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text style={styles.numberText}>
          1234567890
        </Text>
      </View>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>Troubleshooting:</Text>
        <Text style={styles.instructions}>
          • If fonts look the same as "System Font", they're not loading
        </Text>
        <Text style={styles.instructions}>
          • On Android: Fonts should work automatically
        </Text>
        <Text style={styles.instructions}>
          • On iOS: Fonts need to be added to Xcode project
        </Text>
        <Text style={styles.instructions}>
          • Check Metro logs for font loading errors
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: moderateScale(16),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: colors.themeBlack,
    marginBottom: moderateScale(20),
    textAlign: 'center',
  },
  fontContainer: {
    marginBottom: moderateScale(20),
    padding: moderateScale(16),
    backgroundColor: colors.lightGrayV2,
    borderRadius: moderateScale(8),
  },
  fallbackContainer: {
    marginBottom: moderateScale(20),
    padding: moderateScale(16),
    backgroundColor: colors.grayV3,
    borderRadius: moderateScale(8),
  },
  label: {
    fontSize: moderateScale(12),
    color: colors.darkGray,
    marginBottom: moderateScale(8),
    fontWeight: 'bold',
  },
  testText: {
    fontSize: moderateScale(18),
    color: colors.themeBlack,
    marginBottom: moderateScale(4),
  },
  numberText: {
    fontSize: moderateScale(16),
    color: colors.darkGray,
  },
  instructionsContainer: {
    marginTop: moderateScale(20),
    padding: moderateScale(16),
    backgroundColor: colors.secondaryLight,
    borderRadius: moderateScale(8),
  },
  instructionsTitle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.themeBlack,
    marginBottom: moderateScale(8),
  },
  instructions: {
    fontSize: moderateScale(14),
    color: colors.darkGray,
    marginBottom: moderateScale(4),
    lineHeight: moderateScale(20),
  },
});

export default FontTest;