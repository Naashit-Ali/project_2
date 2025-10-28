import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import SafeFlatList from '../components/atoms/SafeFlatList';
import CustomHeading from '../components/molecules/CustomHeading';
import MainHeader from '../components/organisms/MainHeader';
import MealCard from '../components/organisms/MealCard';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';

const SavedMealsScreen = () => {
  return (
    <ScreenBoiler headerType={1} isBack>
      <CustomHeading title={'Saved Meals'} rightText={'Edit'} />

      <SafeFlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item, index}) => <MealCard />}
        contentContainerStyle={{
          marginTop: moderateScale(10, 0.3),
          gap: moderateScale(12, 0.3),
        }}
      />
    </ScreenBoiler>
  );
};

export default SavedMealsScreen;
