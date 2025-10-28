import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../atoms/CustomImage';
import Images from '../../assets/images';
import CustomText from '../atoms/CustomText';
import {fonts} from '../../theme/font';
import {Icon} from 'native-base';
import AntDesign from '@react-native-vector-icons/ant-design';
import { globalStyles } from '../../utils/globalStyles';

const CommunityCard = () => {
  return (
    <View style={styles?.container}>
      <View style={styles?.profileContainer}>
        <View style={styles?.rowView}>
          <CustomImage
            source={Images?.user}
            resizeMode="cover"
            style={styles?.image}
          />
          <CustomText style={styles?.title}>John Doe</CustomText>
        </View>
        <CustomText style={styles?.timeText}>2h ago</CustomText>
      </View>

      <CustomText style={styles?.description}>
        This is a sample description for the community card. It can span
        multiple lines and provide more details about the post.
      </CustomText>

      <View style={styles?.line}></View>

      <View style={styles?.profileContainer}>
        <View style={styles?.rowView}>
          <Icon
            name="heart"
            as={AntDesign}
            size={moderateScale(20, 0.3)}
            color={colors?.danger}
          />
          <CustomText
            style={[
              styles?.description,
              {
                marginTop: 0,
              },
            ]}>
            You, Chris + 106
          </CustomText>
        </View>

        <View style={styles?.rowView}>
          <CustomImage
            source={Images?.comment}
            style={{
              width: moderateScale(20, 0.3),
              height: moderateScale(20, 0.3),
            }}
            resizeMode="contain"
          />
          <CustomText
            style={[
              styles?.description,
              {
                marginTop: 0,
              },
            ]}>
            12 comments
          </CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors?.white,
    padding: moderateScale(15, 0.3),
    borderRadius: moderateScale(12, 0.3),
    ...globalStyles?.elevationStyle
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(6, 0.3),
  },
  image: {
    width: moderateScale(40, 0.3),
    height: moderateScale(40, 0.3),
    borderRadius: moderateScale(20, 0.3),
  },
  timeText: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.gray,
    fontFamily: fonts?.regular,
  },
  title: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.themeBlack,
    fontFamily: fonts?.medium,
  },
  description: {
    fontSize: moderateScale(14, 0.3),
    lineHeight: moderateScale(20, 0.3),
    color: colors?.darkGray,
    fontFamily: fonts?.regular,
    marginTop: moderateScale(10, 0.3),
  },
  line: {
    height: 1,
    backgroundColor: colors?.lightGrayV2,
    marginVertical: moderateScale(10, 0.3),
    marginHorizontal: moderateScale(-15, 0.3),
  },
});

export default CommunityCard;
