import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import MainHeader from '../components/organisms/MainHeader'
import CustomHeading from '../components/molecules/CustomHeading'
import NotificationCard from '../components/organisms/NotificationCard'
import { moderateScale } from 'react-native-size-matters'
import SafeFlatList from '../components/atoms/SafeFlatList'
import { notificationData } from '../utils/mockData'

const NotificationScreen = () => {
  return (
    <ScreenBoiler isBack isSetting>
      
        <CustomHeading title={'Notification'}/>
        <SafeFlatList
        data={notificationData}
        renderItem={({item, index}) => <NotificationCard item={item}/>
        }
        keyExtractor={(item, index) => `notification_${index}`}
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