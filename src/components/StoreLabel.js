import React from 'react';
import { Card, Image, Text } from 'react-native-elements';
import { View, StyleSheet, Linking, TouchableOpacity, TouchableNativeFeedback } from 'react-native';


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
                    <Text style={{borderColor: '#A8D1DF', borderWidth: 3}}>
                        {
                            storenumbers.map(
                                num => <TouchableNativeFeedback onPress={() => Linking.openURL(`tel:${num}`)}
                                        background={TouchableNativeFeedback.SelectableBackground()}>
                                            <View style={{width: 'auto', backgroundColor: 'white'}}>
                                                <Text style={{margin: 10, marginLeft: 3, color: '#117CFE'}}>
                                                    {num}
                                                </Text>
                                            </View>
                                        </TouchableNativeFeedback>
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
        marginLeft: 3
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