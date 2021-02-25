import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements'

const Pagination = () => {
    const { containerStyle } = styles;

    return(
        <SafeAreaView style={containerStyle}>
            <Icon name="skip-previous" type="material" color="purple" />
            <Icon name="skip-next" type="material" color="purple" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: "row",
        fontSize: 14,
        justifyContent: "center"
    }
})

export { Pagination }