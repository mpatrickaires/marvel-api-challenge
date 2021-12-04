import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as Style from './style';

const Loading = ({ message }) => (
	<Style.LoadingContainer>
		<ActivityIndicator size="large" color="#ed1d24" />
		<Style.LoadingMessage>{message}</Style.LoadingMessage>
	</Style.LoadingContainer>
);

Loading.defaultProps = {
	message: 'Loading...',
};

export default Loading;
