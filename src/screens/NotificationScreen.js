import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import MainHeader from '../components/organisms/MainHeader'
import CustomHeading from '../components/molecules/CustomHeading'
import NotificationCard from '../components/organisms/NotificationCard'
import { moderateScale } from 'react-native-size-matters'

const NotificationScreen = () => {
  return (
    <ScreenBoiler>
        <MainHeader 
        // type={1}
        isBack
        isSetting
        />
        <CustomHeading title={'Notification'}/>
        <FlatList
        data={[1,2,3,4,5,6,7,8,9,10]}
        renderItem={({item, index}) => <NotificationCard/>
        }
        contentContainerStyle={styles?.scrollContainer}
        />
    </ScreenBoiler>
  )
}

const styles = StyleSheet?.create({

  scrollContainer: {
    gap: moderateScale(12, 0.3),
    paddingBottom: moderateScale(20, 0.3),
  }
})
export default NotificationScreen