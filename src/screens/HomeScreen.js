import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import CustomHeading from '../components/molecules/CustomHeading';
import CommunityCard from '../components/organisms/CommunityCard';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import { moderateScale } from 'react-native-size-matters';
import SafeFlatList from '../components/atoms/SafeFlatList';
const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScreenBoiler
    
      headerType={1}
      headerTitle="Home"
      containerStyle={styles.container}>
      <CustomHeading title={'Community feed'} />
      <SafeFlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => <CommunityCard />}
        contentContainerStyle={{paddingBottom: 20, gap: 20,
    paddingHorizontal:moderateScale(5,0.3),

        }}
        keyExtractor={(item, index) => `post_${item?.id}_${index}`}
      />
    </ScreenBoiler>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default HomeScreen;
