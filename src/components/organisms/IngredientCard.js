import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/font';
import CustomImage from '../atoms/CustomImage';
import CustomText from '../atoms/CustomText';
import {globalStyles} from '../../utils/globalStyles';

const IngredientCard = ({item = {}}) => {
  return (
    <View style={styles.container}>
      <View style={styles?.imageContainer}>
        <CustomImage
          source={item?.image}
          style={styles?.image}
          resizeMode={'cover'}
        />
      </View>
      <CustomText style={styles?.title} numberOfLines={1}>
        {item?.title}
      </CustomText>
      {item?.subTitle && (
        <CustomText numberOfLines={1} style={styles?.subTitle}>
          ({item?.subTitle})
        </CustomText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '17%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: moderateScale(35, 0.3),
    height: moderateScale(35, 0.3),
    borderRadius: moderateScale(30, 0.3),
  },
  imageContainer: {
    width: moderateScale(50, 0.3),
    height: moderateScale(50, 0.3),
    backgroundColor: colors?.white,
    borderRadius: moderateScale(25, 0.3),
    padding: moderateScale(8, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    ...globalStyles?.elevationStyle,
  },
  title: {
    fontFamily: fonts?.medium,
    fontSize: moderateScale(12, 0.3),
    color: colors?.grayV2,
    marginTop: moderateScale(5, 0.3),
  },
  subTitle: {
    fontFamily: fonts?.regular,
    fontSize: moderateScale(8, 0.3),
    color: colors?.grayV2,
  },
});

export default IngredientCard;
