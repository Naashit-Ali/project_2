import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import NavigationService from '../../navigation/NavigationService';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/font';
import CustomImage from '../atoms/CustomImage';
import CustomText from '../atoms/CustomText';
import ProgressCard from './ProgressCard';
import { globalStyles } from '../../utils/globalStyles';
import Images from '../../assets/images';

const MealCard = () => {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
      onPress={() => {
        NavigationService?.navigate('MealDetail');
      }}
      style={styles.container}>
      <CustomImage
        source={{
          uri: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        }}
        style={styles.image}
        resizeMode={'cover'}
      />
      <View style={styles?.contentContainer}>
        <CustomText style={styles?.title}>
          Classic Grilled Chicken Quinoa Bowl With Asparagus
        </CustomText>
        <CustomText style={styles?.description}>
          A healthy and delicious bowl featuring grilled chicken, quinoa, and
          fresh asparagus, perfect for a nutritious meal.
        </CustomText>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: moderateScale(10, 0.3),
          }}>
          <ProgressCard image={Images?.fireOrange} />
          <ProgressCard progressColor="yellow" title="9g Fat" image={Images?.drop} />
          <ProgressCard progressColor="green" title="92g Protein" image={Images?.leaf}/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors?.white,
    borderRadius: moderateScale(12, 0.3),
  },
  title: {
    fontSize: moderateScale(16, 0.3),
    color: colors?.themeBlack,
    fontFamily: fonts?.medium,
  },
  description: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.grayV2,
    fontFamily: fonts?.regular,
  },
  image: {
    width: '100%',
    height: moderateScale(200, 0.3),
    borderTopLeftRadius: moderateScale(12, 0.3),
    borderTopRightRadius: moderateScale(12, 0.3),
  },
  contentContainer: {
    padding: moderateScale(14, 0.3),
    gap: moderateScale(6, 0.3),
  },
});

export default MealCard;
