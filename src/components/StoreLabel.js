import React from 'react';
import { Card, Image } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';


const StoreLabel = () => {
    return(
        <Card containerStyle={styles.containerStyle}>
            <View style={styles.storeStyles}>   
                <Image
                    style={styles.storeImageStyles}
                    source={{ uri: 'https://pbs.twimg.com/profile_images/1255807561057656833/BADshgW3_400x400.jpg'}}
                />
                <View style={styles.storeTextStyles}>
                    <Text style={styles.boldText}> Sweet Sensation</Text>
                    <Text> 04 Martins Street, Oja Oba, Abule Egba, Lagos, Nigeria</Text>
                    <Text> 0 (904) 564 534, 0 (904) 564 534, </Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    storeStyles:{
        flexDirection: 'row',
        width: '100%',
    },
    storeImageStyles: {
        height: 100,
        width: 100,
        paddingRight: 30
    },
    storeTextStyles: {
        flexShrink: 1,
        justifyContent: 'center'
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 23
    },
    containerStyle: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        elevation: 5
    }
})

export default StoreLabel