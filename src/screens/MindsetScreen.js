import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Images from '../assets/images';
import CustomButton from '../components/atoms/CustomButton';
import CustomImage from '../components/atoms/CustomImage';
import CustomText from '../components/atoms/CustomText';
import CustomTextInput from '../components/atoms/CustomTextInput';
import CustomHeading from '../components/molecules/CustomHeading';
import JournalCard from '../components/organisms/JournalCard';
import Tab from '../components/organisms/Tab';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import { colors } from '../theme/colors';
import { fonts } from '../theme/font';
import SafeFlatList from '../components/atoms/SafeFlatList';

const MindsetScreen = () => {
  const myTabs = [
    {label: 'Weekly Voice Notes', value: 'Weekly Voice Notes'},
    {label: 'Journal', value: 'Journal'},
  ];
  const [activeTab, setActiveTab] = useState('Weekly Voice Notes');
  const [addJournal, setAddJournal] = useState(false);
  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <ScreenBoiler>
        <CustomHeading title={'Mindset Corner'} />
        <Tab
          data={myTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* <JournalCard /> */}

        {activeTab === 'Journal' ? (
          <>
            {addJournal ? (
              <>
                <View style={styles?.addJournalContainer}>
                  <CustomText style={styles?.heading2}>
                    Journal Prompt
                  </CustomText>
                  <CustomText style={styles?.description}>
                    What small habit will future-you thank you you for this
                    week?
                  </CustomText>
                  <CustomTextInput
                    placeholder="Type here..."
                    multiline
                    inputStyle={{
                      height: moderateScale(100, 0.3),
                      textAlignVertical: 'top',
                    }}
                  />

                  <CustomButton
                    onPress={() => {
                      setAddJournal(false);
                    }}
                    style={{
                      paddingVertical: moderateScale(10, 0.3),
                    }}
                    title={'Save Entry'}
                  />
                </View>
              </>
            ) : (
              <>
                <View style={styles?.filterContainer}>
                  <CustomText style={styles?.heading}>My Journal</CustomText>
                  <CustomImage
                    source={Images?.filter}
                    style={styles?.filterImg}
                    resizeMode="contain"
                  />
                </View>

                <SafeFlatList
                  data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  contentContainerStyle={styles?.scrollContainer}
                  renderItem={({item, index}) => <JournalCard />}
                  keyExtractor={(item, index) => `journal_${index}`}
                />
              </>
            )}
          </>
        ) : (
          <>
            <SafeFlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              contentContainerStyle={styles?.scrollContainer}
              renderItem={({item, index}) => <JournalCard type={2} />}
              keyExtractor={(item, index) => `voice_note_${index}`}
            />
          </>
        )}
      </ScreenBoiler>
      {activeTab === 'Journal' && (
        <CustomButton
          title={'+'}
          onPress={() => {
            setAddJournal(!addJournal);
          }}
          style={styles?.addButton}
          textStyle={styles?.addButtonText}
        />
      )}
    </>
  );
};

const styles = StyleSheet?.create({
  scrollContainer: {
    paddingBottom: moderateScale(20, 0.3),
    paddingHorizontal: moderateScale(2, 0.3),
    gap: moderateScale(16, 0.3),
    marginVertical: moderateScale(16, 0.3),
  },
  filterImg: {
    width: moderateScale(20, 0.3),
    height: moderateScale(20, 0.3),
  },
  heading: {
    fontSize: moderateScale(24, 0.3),
    color: colors?.themeBlack,
    fontFamily: fonts?.medium,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: moderateScale(16, 0.3),
    marginBottom: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(5, 0.3),
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
    fontFamily: fonts?.medium,
  },
  description: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.gray,
    fontFamily: fonts?.regular,
  },
});

export default MindsetScreen;
