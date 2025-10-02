import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import CustomStatusBar from '../atoms/CustomStatusBar';
import {colors} from '../../theme/colors';
import MainHeader from '../organisms/MainHeader';
import { moderateScale } from 'react-native-size-matters';

const ScreenBoiler = ({
  children,
  backgroundColor = colors?.white,
  backgroundImage = null,
  scrollEnabled = true,
  statusBarProps = {},
  behavior = Platform.OS === 'ios' ? 'padding' : undefined,
  containerStyle,
  headerType,
  headerTitle = '',
  wrapperContainerStyle,
}) => {
  const Wrapper = backgroundImage ? ImageBackground : View;

  const content = (
    <>
      {scrollEnabled ? (
        <ScrollView
          contentContainerStyle={[
            {
              flexGrow: 1,
              backgroundColor: backgroundImage ? undefined : backgroundColor,
              paddingBottom: moderateScale(20, 0.3),
            },
            containerStyle,
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View
          style={[
            {
              flex: 1,
              backgroundColor: backgroundImage ? undefined : backgroundColor,
            },
            containerStyle,
          ]}>
          {children}
        </View>
      )}
    </>
  );

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: colors?.white}}
      behavior={behavior}
    
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
      {/* <CustomStatusBar {...statusBarProps} /> */}
      <Wrapper
        style={[{
          flex: 1,
          paddingHorizontal: moderateScale(24,0.3),
        }, wrapperContainerStyle]
      }
        {...(backgroundImage && {
          source: backgroundImage,
          resizeMode: 'cover',
        })}>
          {/* <MainHeader type={headerType} title={headerTitle}/> */}
        {content}
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

export default ScreenBoiler;
