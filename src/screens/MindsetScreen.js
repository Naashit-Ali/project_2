import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { act, useState } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import MainHeader from '../components/organisms/MainHeader'
import CustomHeading from '../components/molecules/CustomHeading'
import Tab from '../components/organisms/Tab'
import JournalCard from '../components/organisms/JournalCard'
import { moderateScale } from 'react-native-size-matters'
import CustomImage from '../components/atoms/CustomImage'
import Images from '../assets/images'
import CustomText from '../components/atoms/CustomText'
import { colors } from '../theme/colors'
import { fonts } from '../theme/font'
import CustomButton from '../components/atoms/CustomButton'
import CustomTextInput from '../components/atoms/CustomTextInput'

const MindsetScreen = () => {
  const myTabs = [
    { label: 'Weekly Voice Notes', value: 'Weekly Voice Notes' },
    { label: 'Journal', value: 'Journal' }
  ];
  const [activeTab, setActiveTab] = useState('Weekly Voice Notes');
  const [addJournal, setAddJournal] = useState(false);
  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <ScreenBoiler>
        <MainHeader />
        <CustomHeading
          title={'Mindset Corner'}
        />
        <Tab
          data={myTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* <JournalCard /> */}

        {activeTab === 'Journal' ? (<>

          {addJournal ?
            <>
              <View
                style={styles?.addJournalContainer}>

                <CustomText style={styles?.heading2}>Journal Prompt</CustomText>
                <CustomText style={styles?.description}>
                  What small habit will future-you thank you you for this week?
                </CustomText>
                <CustomTextInput
                placeholder='Type here...'
                multiline
                inputStyle={{
                  height: moderateScale(100, 0.3),
                  textAlignVertical: 'top',
                }}
                />

                <CustomButton
                  onPress={() => { setAddJournal(false) }}
                  style={{
                    paddingVertical: moderateScale(10, 0.3),
                  }}
                  title={'Save Entry'}
                />
              </View>
            </>
            : <>
              <View style={styles?.filterContainer}>
                <CustomText style={styles?.heading}>My Journal</CustomText>
                <CustomImage
                  source={Images?.filter}
                  style={styles?.filterImg}
                  resizeMode='contain'
                />
              </View>


              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                contentContainerStyle={styles?.scrollContainer}
                renderItem={({ item, index }) => <JournalCard />}
              /></>
          }
        </>) : (<>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            contentContainerStyle={styles?.scrollContainer}
            renderItem={({ item, index }) => <JournalCard type={2} />}
          />
        </>)}




      </ScreenBoiler>
      {
        activeTab === 'Journal' &&
        <CustomButton
          title={'+'}
          onPress={() => { setAddJournal(!addJournal) }}
          style={styles?.addButton}
          textStyle={styles?.addButtonText}
        />}
    </>
  )
}

const styles = StyleSheet?.create({
  scrollContainer: {
    paddingBottom: moderateScale(20, 0.3),
    gap: moderateScale(4, 0.3),
    marginTop: moderateScale(12, 0.3),
  },
  filterImg: {
    width: moderateScale(20, 0.3),
    height: moderateScale(20, 0.3),
  },
  heading: {
    fontSize: moderateScale(28, 0.3),
    color: colors?.themeBlack,
    fontFamily: fonts?.medium
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  addButton: {
    width: moderateScale(60, 0.3),
    height: moderateScale(60, 0.3),
    borderRadius: moderateScale(30, 0.3),
    position: 'absolute',
    bottom: moderateScale(60, 0.3),
    right: moderateScale(10, 0.3),
  },
  addButtonText: {
    fontSize: moderateScale(30, 0.3),
    lineHeight: moderateScale(30, 0.3),
  },
  addJournalContainer: {
    padding: moderateScale(14, 0.3),
    backgroundColor: colors?.white,
    borderRadius: moderateScale(10, 0.3),
    marginTop: moderateScale(20, 0.3),
    gap: moderateScale(10, 0.3),
  },
  heading2: {
    fontSize: moderateScale(16, 0.3),
    color: colors?.themeBlack,
    fontFamily: fonts?.medium
  },
  description: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.gray,
    fontFamily: fonts?.regular
  }
})

export default MindsetScreen