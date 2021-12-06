import React, { useEffect } from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';

import * as Style from './style';

const styles = StyleSheet.create({
	Message: {
		backgroundColor: 'white',
		fontSize: 16,
		padding: 8,
		borderRadius: 16,
		marginBottom: 100,
	},
});

const FadeMessage = ({ message, clearMessage }) => {
	const fadeValue = new Animated.Value(0);

	useEffect(() => {
		if (message) {
			fadeValue.setValue(1);
			Animated.timing(fadeValue, {
				toValue: 0,
				duration: 2000,
				easing: Easing.exp,
				useNativeDriver: true,
			}).start(() => clearMessage());
		}
	}, [message]);

	return (
		<Style.Container pointerEvents="none">
			{message.length > 0 && (
				<Animated.Text style={[styles.Message, { opacity: fadeValue }]}>
					{message}
				</Animated.Text>
			)}
		</Style.Container>
	);
};

export default FadeMessage;
