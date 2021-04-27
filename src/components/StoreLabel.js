import React from 'react';
import { Card, Image, Text } from 'react-native-elements';
import { View, StyleSheet, Linking, TouchableOpacity } from 'react-native';


const StoreLabel = ({ storename, storeaddress, storenumbers, storeoffers, storeimage }) => {
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
                        source={{ uri: storeimage}}
                    />
                </View>

                <View style={storeTextStyles}>
                    <Text h4> {storename} </Text>
                    <Text style={{marginTop: 5}}> {storeaddress.street, storeaddress.area, storeaddress.busStop} </Text>
                    <Text style={{marginLeft: 5, marginTop: 10}}>
                        {
                            storenumbers.map(
                                num => <TouchableOpacity key={num}>
                                    <Text
                                        onPress={() => {Linking.openURL(`tel:${num}`)}}
                                    >
                                        {num} &nbsp;
                                    </Text>
                                    </TouchableOpacity>
                                )
                        }
                    </Text>
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