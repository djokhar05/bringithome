import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
	const { parentStyle, headerStyle, textStyle, noticeStyle } = styles;

    return(
    	<View style={parentStyle}>

    		<Text style={headerStyle}> BringItHome 0.01 </Text>

    		<Text style={textStyle}>
    			BringItHome is all about trying trying to help ease your day. Removing the stress of having to go stand in long queues or walk under the scorching heat, when you can easily order your food securely and at the comfort of your homes/offices.
    		</Text>

    		<Text style={textStyle}>
    			You get the options of Mama-Put (Local foodspots) and Eateries / Restaurants. You don't have to leave your offices or send your colleague, just open up BringItHome :)
    		</Text>

    		<Text style={[textStyle, noticeStyle]}>
    			We might be starting out with food, but we wish to let you know that we intend to spread our wings in all areas of human endeavours to ensure that you can get whatever you want, wherever you want it and whereever you are.
    		</Text>

    		<Text style={[textStyle, noticeStyle]}>
    			You will be exposed to stores and shops just as though you're walking your streets.
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
	noticeStyle: {
		fontWeight: 'bold',
		color: '#FFB600'
	}
})

export default About