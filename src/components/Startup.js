import React, { useEffect } from 'react';
import { ImageBackground, SafeAreaView, View, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';


const Startup = () => {

	useEffect(() => {
		let startup = setTimeout(() => {
			Actions.Drawer();
			console.log("hello in here")
		}, 1000)

		return () => {
			clearTimeout(startup)
		}
	}, [])


	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				style={{flex: 1}}
				source={{
					uri: 'https://s3.gifyu.com/images/BiH.gif',
				}}
			>
		</ImageBackground>
    </SafeAreaView>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Startup;