import { View, Text, FlatList, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import MainHeader from '../components/organisms/MainHeader'
import SearchBar from '../components/molecules/SearchBar'
import EventCard from '../components/organisms/EventCard'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../components/atoms/CustomText'
import { fonts } from '../theme/font'
import { colors } from '../theme/colors'
import CustomDropdown from '../components/organisms/CustomDropdown'

const EventScreen = () => {
  const { width, height } = useWindowDimensions('window');
  return (
    <ScreenBoiler
    scrollEnabled
    >
      <MainHeader />
      <View style={styles?.titleContainer}>
        <CustomText style={styles?.title}>Events</CustomText>
        <CustomDropdown
          style={{
            width: width * 0.27,
            borderRadius: moderateScale(50, 0.3),
            paddingVertical: moderateScale(10, 0.3),
          }}
          placeholder={'Select'} />

      </View>
      <SearchBar />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        contentContainerStyle={styles?.scrollContainer}
        renderItem={() => <EventCard />}
      />
    </ScreenBoiler>
  )
}

const styles = StyleSheet?.create({
  scrollContainer: {
    gap: moderateScale(12, 0.3),
    paddingBottom: moderateScale(20, 0.3),
    marginTop: moderateScale(12, 0.3),
  },
  title: {
    fontSize: moderateScale(24, 0.3),
    fontFamily: fonts?.medium,
    color: colors?.themeBlack,
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(12, 0.3),
    width: '100%',
  }
})

export default EventScreen