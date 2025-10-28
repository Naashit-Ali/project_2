import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import SafeFlatList from '../components/atoms/SafeFlatList';
import CustomHeading from '../components/molecules/CustomHeading';
import EventCard from '../components/organisms/EventCard';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';

const SavedWorkoutScreen = () => {
  return (
    <ScreenBoiler isBack>
      <CustomHeading title={'Saved Workouts'} rightText={'Edit'} />

      <SafeFlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item, index}) => <EventCard type={2} />}
        contentContainerStyle={{
          marginTop: moderateScale(10, 0.3),
          gap: moderateScale(12, 0.3),
        }}
      />
    </ScreenBoiler>
  );
};

export default SavedWorkoutScreen;
