import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

const Menu = () => {
	const { headerStyle, parentStyle, cardStyle, alignCenter } = styles;
	return (
		<View>
			<Text style={headerStyle}> BringItHome </Text>

			<View style={parentStyle}>
				<TouchableOpacity style={cardStyle}>
					<Card>
						<MaterialCommunityIcons style={alignCenter} size={25} name="bike-fast" />
						<Text style={alignCenter}> Dispatch </Text>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity style={cardStyle} onPress={Actions.Home}>
					<Card>
						<MaterialCommunityIcons style={alignCenter} size={25} name="rice" />
						<Text style={alignCenter}> Food </Text>
					</Card>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#6D60A2',
		textAlign: 'center',
		padding: 10
	},
	parentStyle: {
		display: 'flex',
		flexDirection: 'row'
	},
	cardStyle: {
		flexGrow: 1,
	},
	alignCenter: {
		textAlign: 'center',
	}
})

export default Menu