import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { Card, CardSection, FadeInView } from './common'

const FoodItem = ({ foodItems }) => {

    const { 
        foodListStyles, foodImageStyles, textStyle,
        foodTextStyles, foodPriceStyles, evenStyle
    } = styles;

    const renderFoodItem = ({ item, index }) => {
        let priceToNum = parseInt(item.price);

        
        return(
            <Card>
                <CardSection>
                    <View style={[foodListStyles, index % 2 != 0 ? evenStyle: '']}>
                        <View style={foodImageStyles}>
                            <FadeInView>
                                <Image
                                    style={{height: 60, borderRadius: 20}}
                                    source={{uri: item.image}}
                                />
                            </FadeInView>
                        </View>
                        <View style={foodTextStyles}><Text style={textStyle}>{item.name}</Text></View>
                        <View style={foodPriceStyles}><Text style={textStyle}> N {Number(priceToNum).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</Text></View>
                    </View>
                </CardSection>
            </Card>
        )
    }

    return (
        <FlatList
            data={foodItems}
            renderItem={renderFoodItem}
            keyExtractor={item => item.price}
        />
    )
}

const styles = StyleSheet.create({
    foodListStyles: {
        flexDirection: "row",
        flex: 1,
        fontSize: 30,
    },
    foodImageStyles: {
        flex: 1
    },
    foodTextStyles: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    foodPriceStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    evenStyle: {
        backgroundColor: '#A8D1DF'
    }
})

export default FoodItem