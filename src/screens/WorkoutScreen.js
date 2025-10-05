import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import { moderateScale } from 'react-native-size-matters'
import CustomHeading from '../components/molecules/CustomHeading'
import TextPill from '../components/organisms/TextPill'
import { workoutData } from '../utils/mockData'
import SearchBar from '../components/molecules/SearchBar'
import WorkoutCard from '../components/organisms/WorkoutCard'
import MainHeader from '../components/organisms/MainHeader'
import Tab from '../components/organisms/Tab'
import CustomText from '../components/atoms/CustomText'
import { colors } from '../theme/colors'
import CustomButton from '../components/atoms/CustomButton'
import { fonts } from '../theme/font'

const WorkoutScreen = () => {
  const myTabs = [
    { label: 'Present', value: 'Present' },
    { label: 'CustomWorkout', value: 'CustomWorkout' }
  ];
  const [selectedPill, setSelectedPill] = useState(0);
  const [activeTab, setActiveTab] = useState('Present');
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [yourPlan, setYourPlan] = useState([
    { name: 'Row', sets: 3, reps: 10 },
    { name: 'Plank', sets: 3, reps: 10 },
    { name: 'Squat', sets: 3, reps: 10 },
  ]);

  const exercises = [
    'Squats',
    'Push-up',
    'Row',
    'Lunge',
    'Plank',
    'Hip thrust'
  ];

  const handleTabChange = tab => {
    setActiveTab(tab);
  };


  return (
    <ScreenBoiler
      containerStyle={{
      }}
      scrollEnabled
      wrapperContainerStyle={{
        paddingHorizontal: moderateScale(5, 0.3),
      }}
    >
      <MainHeader type={1} />

      <Tab
        data={myTabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {activeTab === 'Present' ? (
        <>
          <CustomHeading title={'Workout'} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              gap: 10,
            }}
            style={{
              maxHeight: moderateScale(50, 0.3),
              width: '100%',
            }}
          >
            {workoutData.map((item, index) => (
              <TextPill
                key={index}
                title={item.label}
                isSelected={selectedPill == index}
                id={index}
                onPress={() => setSelectedPill(index)}
              />
            ))}
          </ScrollView>

          <SearchBar />
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item, index }) => <WorkoutCard />}
            contentContainerStyle={{
              gap: moderateScale(15, 0.3),
              paddingBottom: moderateScale(100, 0.3),
              marginTop: moderateScale(10, 0.3),
            }}
          />
        </>
      ) : (
        <View style={styles.customWorkoutContainer}>
          <CustomHeading title={'Custom workout builder'} />

          {/* Exercise Selection Grid */}
          <View style={styles.exerciseGrid}>
            {exercises.map((exercise, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.exerciseCard,
                ]}
              >
                <CustomText style={styles.exerciseText}>{exercise}</CustomText>

              </TouchableOpacity>
            ))}
          </View>

          {/* Your Plan Section */}

          <View style={{
            backgroundColor: colors?.white,
            padding: moderateScale(12, 0.3),
            borderRadius: moderateScale(6, 0.3),
          }}>
            <CustomText style={styles.yourPlanTitle}>Your Plan</CustomText>
            
            <View style={styles.planList}>
              {yourPlan.map((item, index) => (
                <View key={index} style={styles.planItem}>
                  <CustomText style={styles.planItemText}>{item.name}</CustomText>
                  <CustomText style={styles.planItemText}>{item.sets} X {item.reps}</CustomText>
                </View>
              ))}
            </View>

            <CustomButton
              title={'Save Plan'}
            />

          </View>
        </View>
      )}
    </ScreenBoiler>
  );
};

const styles = StyleSheet.create({
  customWorkoutContainer: {
    flex: 1,
    paddingBottom: moderateScale(100, 0.3),
  },
  exerciseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(12, 0.3),
    marginTop: moderateScale(10, 0.3),
    marginBottom: moderateScale(30, 0.3),
    alignItems: 'center',
    // justifyContent: 'space-between',
    justifyContent: 'center'
  },
  exerciseCard: {
    width: '30%',
    backgroundColor: colors?.white,
    borderRadius: moderateScale(6, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(16, 0.3),
  },

  exerciseText: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.gray,
    fontFamily: fonts?.regular
  },
  yourPlanTitle: {
    fontSize: moderateScale(18, 0.3),
    fontFamily: fonts?.medium,
    color: colors?.darkGray,
    marginBottom: moderateScale(15, 0.3),
  },
  planList: {
    gap: moderateScale(12, 0.3),
    marginBottom: moderateScale(25, 0.3),
  },
  planItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: moderateScale(16, 0.3),
    paddingHorizontal: moderateScale(20, 0.3),
    borderRadius: moderateScale(6, 0.3),
  },
  planItemText: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.gray,
    fontFamily: fonts?.regular
  },
});

export default WorkoutScreen;