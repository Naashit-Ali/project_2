import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomImage from '../atoms/CustomImage'
import { colors } from '../../theme/colors'
import { moderateScale } from 'react-native-size-matters'

const IngredientCard = () => {
  return (
    <View style={styles.container}>
        
        <CustomImage
        source={{uri:'https://www.themealdb.com/images/ingredients/Chicken.png'}
    }
    style={styles?.image}
    resizeMode={'cover'}
        />
        </View>
  )
}


const styles = StyleSheet.create({
    container: {    

        backgroundColor: colors?.danger,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 60,  
        height: 60,
        borderRadius: 30,
        padding: moderateScale(20,0.3),
        backgroundColor:'blue'
    }
})

export default IngredientCard