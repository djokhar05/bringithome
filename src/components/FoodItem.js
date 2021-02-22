import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { Card, CardSection, FadeInView } from './common'

const FoodItem = ({ foodItems }) => {

    const { 
        foodListStyles, foodImageStyles, textStyle,
        foodTextStyles, foodPriceStyles,
    } = styles;

    const renderFoodItem = ({ item }) => {
        let priceToNum = parseInt(item.price);

        console.log(typeof priceToNum);
        return(
            <Card>
                <CardSection>
                    <View style={foodListStyles}>
                        <View style={foodImageStyles}>
                            <FadeInView>
                                <Image
                                    style={{height: 60, borderRadius: 20}}
                                    source={{uri: item.image}}
                                />
                            </FadeInView>
                        </View>
                        <View style={foodTextStyles}><Text style={textStyle}>{item.name}</Text></View>
                        <View style={foodPriceStyles}><Text style={textStyle}> N {priceToNum.toLocaleString()}</Text></View>
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
        fontSize: 30
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
    }
})

export default FoodItem