import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../components/atoms/CustomText';
import SafeFlatList from '../components/atoms/SafeFlatList';
import SearchBar from '../components/molecules/SearchBar';
import CustomDropdown from '../components/organisms/CustomDropdown';
import EventCard from '../components/organisms/EventCard';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

const EventScreen = () => {
  const {width, height} = useWindowDimensions('window');
  return (
    <ScreenBoiler
      scrollEnabled
      containerStyle={{
        paddingHorizontal: moderateScale(5, 0.3),
      }}>
      <View style={styles?.titleContainer}>
        <CustomText style={styles?.title}>Events</CustomText>
        <CustomDropdown
          style={{
            width: width * 0.27,
            borderRadius: moderateScale(50, 0.3),
            paddingVertical: moderateScale(10, 0.3),
          }}
          placeholder={'Select'}
        />
      </View>
      <SearchBar />
      <SafeFlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        contentContainerStyle={styles?.scrollContainer}
        renderItem={({item, index}) => <EventCard />}
        keyExtractor={(item, index) => `event_${index}`}
      />
    </ScreenBoiler>
  );
};

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
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: moderateScale(12, 0.3),
    width: '100%',
  },
});

export default EventScreen;
