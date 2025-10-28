import { Progress } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Images from '../../assets/images';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/font';
import CustomImage from '../atoms/CustomImage';
import CustomText from '../atoms/CustomText';

const ProgressCard = ({
  image = Images?.clock,
  title = '551 Protein',
  progressColor = 'orange',
  progressValue = 70,
}) => {
  return (
    <View
      style={{
        width: '30%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: moderateScale(6, 0.3),
          marginBottom: moderateScale(6, 0.3),
        }}>
        <CustomImage
          source={image}
          style={{
            width: moderateScale(16, 0.3),
            height: moderateScale(16, 0.3),
          }}
          resizeMode="contain"
        />
        <CustomText
          style={{
            fontSize: moderateScale(12, 0.3),
            color: colors?.themeBlack,
            fontFamily: fonts?.regular,
          }}>
          {title}
        </CustomText>
      </View>

      <Progress
        backgroundColor={colors?.grayV2}
        colorScheme={progressColor}
        rounded="10"
        size={'sm'} //xs , sm, md, lg, xl
        value={progressValue}
      />
    </View>
  );
};

export default ProgressCard;
