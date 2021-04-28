import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact = () => {
	const { parentStyle, headerStyle, textStyle, opinionStyle } = styles;
	
    return(
    	<View style={parentStyle}>

    		<Text style={headerStyle}> BringItHome 0.01 </Text>

    		<Text style={textStyle}>
    			How TO REACH US:
    		</Text>

    		<Text> Tel.: 080 (835) 59178 </Text>
    		<Text> Email: dedon4christ5@yahoo.com </Text>

    		<Text style={[textStyle, opinionStyle]}>
    			Please feel free to send us an email or put a call through to us, We belive no one is an island of knowldge, your opinions and constructive criticism will go a long way in making this app better for us all.
    		</Text>
    	</View>
    )
}

const styles = StyleSheet.create({
	parentStyle: {
		padding: 20,
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 20,
		color: 'green'
	},
	textStyle: {
		fontSize: 17,
		marginTop: 20,
		color: 'grey'
	},
	opinionStyle: {
		color: 'purple',
		fontWeight: 'bold'
	}
})

export default Contact