import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';
import AntDesign from '@react-native-vector-icons/ant-design';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../atoms/CustomImage';
import Images from '../../assets/images';
import CustomText from '../atoms/CustomText';
import {fonts} from '../../theme/font';
import {colors} from '../../theme/colors';
import NavigationService from '../../navigation/NavigationService';

const MainHeader = ({
  title = 'Header',
  type = 1, //1-back 2-menu
}) => {
    const onPressBack = () => {
     NavigationService?.goBack()
    }
  const Header1 = () => {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: moderateScale(24,0.3),
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
    );
  };
  return <View>{type === 1 ? <Header1 /> : null}</View>;
};

export default MainHeader;
