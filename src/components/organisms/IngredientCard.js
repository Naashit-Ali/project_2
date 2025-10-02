import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomImage from '../atoms/CustomImage'
import { colors } from '../../theme/colors'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'

const IngredientCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles?.imageContainer}>
                <CustomImage
                    source={{ uri: 'https://www.themealdb.com/images/ingredients/Chicken.png' }
                    }
                    style={styles?.image}
                    resizeMode={'cover'}
                />
            </View>
            <CustomText style={styles?.title}
                numberOfLines={1}
            >Salt</CustomText>
            <CustomText
                numberOfLines={1}
                style={styles?.subTitle}>(Alergy)</CustomText>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '17%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: moderateScale(40, 0.3),
        height: moderateScale(40, 0.3),
        borderRadius: moderateScale(30, 0.3),
    },
    imageContainer: {
        padding: moderateScale(16, 0.3),
        backgroundColor: colors?.white,
        borderRadius: moderateScale(50, 0.3),
        padding: moderateScale(8, 0.3),
    },
    title: {
        fontFamily: fonts?.medium,
        fontSize: moderateScale(16, 0.3),
        color: colors?.grayV2,
        marginTop: moderateScale(5, 0.3)
    },
    subTitle: {
        fontFamily: fonts?.regular,
        fontSize: moderateScale(12, 0.3),
        color: colors?.grayV2
    }
})

export default IngredientCard