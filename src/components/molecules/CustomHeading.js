import React from 'react';
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/font';
import CustomText from '../atoms/CustomText';

const CustomHeading = ({ title, rightText, onPress, style }) => {
    const { width, height } = useWindowDimensions();
    const styles = customStyleSheet(width, height);

    return (
        <View style={[styles.container, style]}>
            <CustomText style={styles?.heading}>
                {title}
            </CustomText>

            {rightText && <TouchableOpacity
                onPress={onPress}
                style={styles?.rightContainer}>

                <CustomText style={styles?.rightHeading}>{rightText}</CustomText>
            </TouchableOpacity>}
        </View>
    )
}

const customStyleSheet = (width, height) => StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: moderateScale(10, 0.3),
    },
    heading: {
        fontSize: moderateScale(24, 0.3),
        color: colors?.themeBlack,
        flex: 1,
        fontFamily: fonts?.medium
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(5, 0.3)
    },
    rightHeading: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.primary,
        fontFamily: fonts?.medium
    },


})

export default CustomHeading