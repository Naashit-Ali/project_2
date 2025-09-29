import AntDesign from '@react-native-vector-icons/ant-design'
import { Icon } from 'native-base'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Images from '../../assets/images'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/font'
import CustomImage from '../atoms/CustomImage'

const SearchBar = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>

      <Icon
        name='search'
        as={AntDesign}
        size={moderateScale(16, 0.3)}
        color={colors?.grayV2}
      />

      <TextInput
        placeholder='Search'
        style={styles?.inputStyle}
        placeholderTextColor={colors?.grayV2}
        value={value}
        onChangeText={onChangeText}
      />

      <CustomImage
        source={Images?.facebook}
        style={styles?.filter}
        resizeMode='contain'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: moderateScale(10, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors?.white,
    padding: moderateScale(8, 0.3),
    borderRadius: moderateScale(10, 0.3),
    justifyContent: 'space-between',
  },
  inputStyle: {
    flex: 1,
    marginLeft: moderateScale(4, 0.3),
    fontSize: moderateScale(14, 0.3),
    color: colors?.black,
    fontFamily: fonts?.regular
  },
  filter: {
    width: moderateScale(30, 0.3),
    height: moderateScale(30, 0.3),
  }
})

export default SearchBar