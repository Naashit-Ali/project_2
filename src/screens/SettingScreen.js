import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import MainHeader from '../components/organisms/MainHeader'
import CustomHeading from '../components/molecules/CustomHeading'
import { Icon } from 'native-base'
import AntDesign from '@react-native-vector-icons/ant-design'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../theme/colors'
import CustomImage from '../components/atoms/CustomImage'
import CustomText from '../components/atoms/CustomText'
import Images from '../assets/images'
import { fonts } from '../theme/font'

const SettingScreen = () => {
      const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);


     const TabView = ({label , image = Images?.mic, onPress, isSwitch=false}) => {
    return (
      <TouchableOpacity 
      onPress={onPress}
      style={styles?.tabContainer}>
        <View style={styles?.tab}>
          <CustomImage
            source={image}
            style={styles.tabIcon}
            resizeMode='contain'
          />
          <CustomText style={styles?.tabText}>{label}</CustomText>
        </View>
     {isSwitch ? <>
     <Switch
     value={isNotificationEnabled}
     onValueChange={() => {
       setIsNotificationEnabled(!isNotificationEnabled);
     }}
     thumbColor={colors?.white}
       trackColor={{ false: colors?.grayV2, true: colors?.green }}
     style={styles.switchStyle}
     />
     </> :     <Icon
     name={'right'}
     as={AntDesign}
     size={moderateScale(14, 0.3)}
     color={colors?.white}
     />}

      </TouchableOpacity>
    )
  }
  return (
    <ScreenBoiler>
<MainHeader
isBack
isMenu
/>
<CustomHeading
title={'Settings'}
/>

<View style={styles?.container}>
    <CustomText style={styles?.text}>
        Preference
    </CustomText>
<TabView
          label={'Notifications'}
          isSwitch={true}
            image={Images?.notification}
        />
        <TabView
        label={'Language'}
        image={Images?.notification}
        />
</View>


<View style={styles?.container}>
    <CustomText style={styles?.text}>
        Other
    </CustomText>

        <TabView
        label={'Change Password'}
        image={Images?.notification}
        />
        <TabView
        label={'Delete Account'}
        image={Images?.notification}
        />
        <TabView
        label={'Logout'}
        image={Images?.notification}
        />
</View>

    </ScreenBoiler>
  )
}

const styles = StyleSheet?.create({
     tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(12, .3)
  },
  tabText: {
    color: colors?.themeBlack,
    fontSize: moderateScale(16, 0.3),
    fontFamily: fonts?.regular,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10, 0.3)
  },
  tabIcon: {
    width: moderateScale(20, 0.3),
    height: moderateScale(20, 0.3)
  },
  switchStyle: {
    transform: [{ scale: 1.2 }]
  },
 text: {
    color: colors?.grayV2,
    fontSize: moderateScale(16, 0.3),
    fontFamily: fonts?.medium,
 },
 container: {
    backgroundColor: colors?.white,
    width: '100%',
    padding: moderateScale(10, 0.3),
    borderRadius: moderateScale(8, 0.3),
    marginBottom: moderateScale(20, 0.3),
}
})


export default SettingScreen