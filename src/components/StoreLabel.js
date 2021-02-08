import React from 'react';
import { Card, Image, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';


const StoreLabel = ({ storename, storeaddress, storenumbers }) => {
    const { 
        storeStyles, storeImageStylesContainer, 
        storeImageStyles, storeTextStyles, boldText
    } = styles
    return(
        <Card containerStyle={styles.containerStyle}>
            <View style={storeStyles}>
                <View style={storeImageStylesContainer}>
                    <Image
                        resizeMode="contain"
                        style={storeImageStyles}
                        source={{ uri: 'https://pbs.twimg.com/profile_images/1255807561057656833/BADshgW3_400x400.jpg'}}
                    />
                </View>

                <View style={storeTextStyles}>
                    <Text h4> {storename} </Text>
                    <Text> {storeaddress.suite, storeaddress.street, storeaddress.city} </Text>
                    <Text> {storenumbers.toString()} </Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    storeStyles:{
        flexDirection: 'row',
    },
    storeImageStylesContainer:{
        flex: 0.7,
        justifyContent: 'center',
        alignContent: 'center'
    },
    storeImageStyles:{
        height: 80,
    },
    storeTextStyles:{
        flex: 2.3,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 23
    },
    containerStyle: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        elevation: 5,
    }
})

export default StoreLabel