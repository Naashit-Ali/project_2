import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../../theme/colors';
import { mode } from 'native-base/lib/typescript/theme/tools';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../theme/font';
import CustomText from '../atoms/CustomText';

const CustomDropdown = ({
    data,
    value,
    setValue,
    placeholder,
    errorText,
    style,
    label,
}) => {
    const { width, height } = useWindowDimensions();
    const styles = customStyleSheet(width, height);

    return (
        <View style={styles?.container}>
            {label && <CustomText style={styles?.label}>{label}</CustomText>}}
            <Dropdown
                style={[styles?.dropdown, style]}
                data={data}
                selectedTextStyle={styles?.textStyle}
                labelField="label"
                valueField="value"
                placeholderStyle={styles?.placeholderStyle}
                maxHeight={moderateScale(300, 0.3)}
                placeholder={placeholder ? placeholder : "Select item"}
                value={value}
                onChange={item => {
                    setValue(item);
                }}
            />

          {errorText &&  <CustomText style={styles?.errorText}>{errorText}</CustomText>}
        </View>
    )
}

const customStyleSheet = (width, height) => StyleSheet.create({
    container: {
    },
    dropdown: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors?.lightGrayV2,
        borderRadius: moderateScale(6, 0.3),
        paddingHorizontal: moderateScale(16, 0.3),
        paddingVertical: moderateScale(16, 0.3),
    },
    placeholderStyle: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.themeBlack,
        fontFamily: fonts?.regular,
    },
    textStyle: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.themeBlack,
        fontFamily: fonts?.regular,
    }, 
    errorText:{
        color: colors?.error,
        fontSize: moderateScale(12, 0.3),
        fontFamily: fonts?.regular,
        marginTop: moderateScale(8, 0.3),
        marginLeft: moderateScale(10, 0.3),
    },
    label: {
        color: colors?.themeBlack,
        fontSize: moderateScale(14, 0.3),
        fontFamily: fonts?.regular,
        marginBottom: moderateScale(8, 0.3),
    },
})

export default CustomDropdown