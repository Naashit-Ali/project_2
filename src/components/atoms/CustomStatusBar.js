// CustomStatusBar.js
import React from 'react';
import {View, StatusBar, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';

const CustomStatusBar = ({
  backgroundColor = colors?.white,
  barStyle = 'light-content', // 'light-content' for light text
  translucent = false,
  hidden = undefined,
}) => {
  const isIOS = Platform.OS === 'ios';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      {isIOS ? (
        <SafeAreaView style={{backgroundColor}}>
          <StatusBar
            translucent={translucent}
            backgroundColor={backgroundColor}
            barStyle={barStyle}
            hidden={hidden}
          />
        </SafeAreaView>
      ) : (
        <>
          <StatusBar
            translucent={translucent}
            backgroundColor={backgroundColor}
            barStyle={barStyle}
            hidden={hidden}
          />
          {!translucent && (
            <View style={[styles.statusBar, {backgroundColor}]} />
          )}
        </>
      )}
    </View>
  );
};

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? moderateScale(20, 0.3) : StatusBar.currentHeight - moderateScale(20,0.3);

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default CustomStatusBar;
