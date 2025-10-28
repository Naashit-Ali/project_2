import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import CustomImage from '../atoms/CustomImage'
import Images from '../../assets/images'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'

const UploadImage = () => {
    return (
        <View style={styles?.container}>
            <CustomImage
                source={Images?.exit}
                tintColor={colors?.black}
                style={{
                    width: moderateScale(35, 0.3),
                    height: moderateScale(35, 0.3),
                }}
            />
            <CustomText style={styles?.text}>Upload Photo</CustomText>
            <CustomText style={styles?.text1}>Upload a fitness photo for your gallery</CustomText>
            <CustomText style={styles?.text1}>Max size 4 MB</CustomText>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: moderateScale(200, 0.3),
        backgroundColor: colors?.grayV3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(12, 0.3),
        marginTop: moderateScale(10, 0.3),
        paddingHorizontal: moderateScale(16, 0.3),
    },
    text: {
        fontSize: moderateScale(16, 0.3),
        color: colors?.black,
        marginTop: moderateScale(20, 0.3),
        marginBottom: moderateScale(10, 0.3),
        fontFamily: fonts?.bold,
    },
    text1: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.gray,
        fontFamily: fonts?.regular
    },
})

export default UploadImage