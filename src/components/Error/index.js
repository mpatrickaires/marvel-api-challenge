import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Style from './style';

const Error = ({ title, message, error }) => (
	<Style.Container>
		<Icon size={60} name="warning" color="#ed1d24" />
		<Style.Title>{title}</Style.Title>
		<Style.Message>{message}</Style.Message>
		{error && <Style.Error>{error}</Style.Error>}
	</Style.Container>
);

Error.defaultProps = {
	title: 'Oops, something went wrong!',
	message: "Don't worry, the Avengers are already taking care of that.",
	error: '',
};

export default Error;
