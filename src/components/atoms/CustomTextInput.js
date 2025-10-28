import { Icon } from 'native-base';
import { useState } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../theme/colors';
import CustomText from './CustomText';
import AntDesign from '@react-native-vector-icons/ant-design';
import { fonts } from '../../theme/font';

const CustomTextInput = ({
  containerStyle = {},
  inputContainerStyle = {},
  iconStyle = {},
  iconName,
  iconColor,
  inputStyle = {},
  setValue,
  iconStyleContainer,
  value,
  iconPress,
  placeholder = 'Enter here...',
  placeholderColor,
  secureText = false,
  editable = true,
  label,
  type,
  secondary,
  labelStyle,
  errorTxt,
  ...rest
}) => {
  const {width,height} = useWindowDimensions();
  const styles = customStyleSheet(width,height);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      style={[
        styles.container,
        secondary && {
          width: '100%',
          backgroundColor: 'transparent',
          borderRadius: moderateScale(0, 0.3),
          borderWidth: 0,
          paddingVertical: moderateScale(10, 0.3),
          marginBottom: 0,
          paddingHorizontal: 0,
          alignSelf: 'flex-start',
        },
        containerStyle,
        errorTxt && {marginBottom: moderateScale(5, 0.3)},
      ]}>
      {label && (
        <CustomText style={[styles.labelStyles, labelStyle]}>
          {label}
        </CustomText>
      )}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          style={[
            styles?.inputBox,
            inputStyle,
            secondary && Platform.OS === 'android' && {minHeight: 0},
            iconName && {width: '93%'},
          ]}
          onChangeText={text =>
            setValue &&
            setValue(text)
          }
          value={value}
          secureTextEntry={secureText ? !showPassword : false}
          placeholder={placeholder !== 'Enter here...' ? placeholder : label}
          placeholderTextColor={
            placeholderColor ? placeholderColor : colors.themeBlack
          }
          {...rest}
          editable={editable}
        />
        {secureText && (
          <TouchableOpacity style={[styles?.eyeIconContainer]}>
            <Icon
              name={showPassword ? 'eye' : 'eye-invisible'}
              as={AntDesign}
              style={{
                color: iconColor ? iconColor : colors?.grayV2,
              }}
              size={moderateScale(20,0.6)}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorTxt && (
        <CustomText style={styles?.errorText}>{errorTxt}</CustomText>
      )}
    </View>
  );
};
const customStyleSheet = (width,height) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: moderateScale(12, 0.3),
    },
    inputContainer: {
    
      width: '100%',
      paddingHorizontal: moderateScale(20, 0.3),
      borderWidth: 1,
      borderColor: colors.lightGrayV2,
      borderRadius: moderateScale(6, 0.3),

      flexDirection: 'row',
      alignItems: 'center',
    },
    inputBox: {
      borderRadius: moderateScale(6, 0.3),
      fontSize: moderateScale(14, 0.3),
      color: colors.themeBlack,
      minHeight: moderateScale(50, 0.3),
      width: '100%',
    },
    eyeIconContainer: {
      paddingHorizontal: width * 0.04,
      position: 'absolute',
      right: 0,
      height: Platform.OS === 'android' ? height * 0.0725 : height * 0.0525,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    labelStyles: {
      fontSize: moderateScale(16, 0.3),
      color: colors.themeBlack,
      ...fonts.regular,
      marginBottom: moderateScale(5, 0.3),
      paddingHorizontal: moderateScale(25, 0.3),
      paddingBottom: moderateScale(5, 0.3),
      textAlign: 'left',
      width: '100%',
    },
    errorText: {
      color: colors?.danger,
      textAlign: 'left',
      width: '90%',
      marginTop: moderateScale(5, 0.3),
      marginLeft: moderateScale(20, 0.3),
      fontSize: moderateScale(12, 0.3),
    },
  });
};
export default CustomTextInput;
