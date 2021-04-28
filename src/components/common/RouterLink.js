import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

const RouterLink = ({ children, onPress, Link, icon }) => {
    //If Children elements are passed in return that
    // or render a text element instead
    const renderElement = () => children ? 
        children : 
        <View style={styles.linkStyle}>
            <Text style={styles.linkTextStyle}>{Link}</Text>
            <Icon name={icon} type="material" color="#0075FF" />
        </View>

    return(
        <View>
            <TouchableOpacity onPress={onPress}>
                {renderElement()}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    linkStyle: {
        flexDirection: 'row',
        marginTop: 30
    },
    linkTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight: 10,
        marginLeft: 20,
    },
})

export { RouterLink }