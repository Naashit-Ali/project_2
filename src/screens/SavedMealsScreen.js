import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import MainHeader from '../components/organisms/MainHeader'
import CustomHeading from '../components/molecules/CustomHeading'
import MealCard from '../components/organisms/MealCard'
import { moderateScale } from 'react-native-size-matters'

const SavedMealsScreen = () => {
  return (
   <ScreenBoiler>
    <MainHeader
    isBack
    />
    <CustomHeading
    title={'Saved Meals'}
    rightText={'Edit'}
    />

    <FlatList
    data={[1,2,3,4,5,6,7,8,9,10]}
    renderItem={({item, index}) => <MealCard/>
    }
    contentContainerStyle={{
        marginTop:moderateScale(10,0.3),
        gap:moderateScale(12,0.3),
    }}
    />
   </ScreenBoiler>
  )
}

export default SavedMealsScreen