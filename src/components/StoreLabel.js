import React from 'react';
import { Card, Image, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';


const StoreLabel = ({ storename, storeaddress, storenumbers, storeoffers }) => {
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
                    <Text> {storeaddress.street, storeaddress.area, storeaddress.busStop} </Text>
                    <Text> {storenumbers.map(num => <Text key={num}> {num}, </Text>)} </Text>
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
        shadowColor: 'gray',
        shadowOffset: {width: 3, height: 4},
        elevation: 5,
        borderRadius: 5
    }
})

export default StoreLabel