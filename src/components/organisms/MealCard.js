import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import NavigationService from '../../navigation/NavigationService'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/font'
import CustomImage from '../atoms/CustomImage'
import CustomText from '../atoms/CustomText'
import ProgressCard from './ProgressCard'

const MealCard = () => {


    return (
        <TouchableOpacity
        onPress={() => { 
            NavigationService?.navigate('MealDetail');
        }}
        style={styles.container}>
            <CustomImage
                source={{ uri: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' }
                }
                style={styles.image}
                resizeMode={'cover'}
            />
            <View style={styles?.contentContainer}>
                <CustomText style={styles?.title}>Classic Grilled Chicken Quinoa Bowl With Asparagus</CustomText>
                <CustomText style={styles?.description}>A healthy and delicious bowl featuring grilled chicken, quinoa, and fresh asparagus, perfect for a nutritious meal.</CustomText>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(10, 0.3) }}>

                    <ProgressCard />
                    <ProgressCard
                        progressColor='yellow'
                        title='9g Fat'
                    /><ProgressCard
                        progressColor='green'
                        title='92g Protein'
                    />


                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors?.white,
        borderRadius: moderateScale(12, 0.3),
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: moderateScale(18, 0.3),
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
        padding: moderateScale(12, 0.3),
        gap: moderateScale(6, 0.3),
    },
})

export default MealCard