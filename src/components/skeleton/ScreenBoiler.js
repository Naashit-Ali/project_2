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
import {moderateScale} from 'react-native-size-matters';

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
  isBack = false,
  isSetting = false,
  isMenu = false,
  mainContainerStyle = {},
  headerOneStyle = {},
  showHeader = true,
  hidden = false,
  barStyle = 'dark-content',
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
      <CustomStatusBar
        {...statusBarProps}
        barStyle={barStyle}
        hidden={hidden}
      />
      <Wrapper
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(24, 0.3),
          ...mainContainerStyle,
        }}
        {...(backgroundImage && {
          source: backgroundImage,
          resizeMode: 'cover',
        })}>
        {showHeader && (
          <MainHeader
            type={headerType}
            isSetting={isSetting}
            isMenu={isMenu}
            title={headerTitle}
            isBack={isBack}
            headerOneStyle={headerOneStyle}
          />
        )}
        {content}
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

export default ScreenBoiler;
