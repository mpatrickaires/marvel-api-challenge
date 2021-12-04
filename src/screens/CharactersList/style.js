import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
`;

export const LoadingContainer = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	justify-content: center;
	align-items: center;
`;

export const LoadingMessage = styled.Text`
	font-size: 26px;
`;

export const CharacterContainer = styled.View`
	padding: 8px;
`;

export const CharacterButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	border-bottom-width: 1px;
	padding: 8px;
`;

export const CharacterImage = styled.Image`
	height: 80px;
	width: 80px;
	border-radius: 30px;
`;

export const CharacterName = styled.Text`
	flex-shrink: 1;
	font-size: 26px;
	margin-left: 15px;
`;

export const SearchContainer = styled.View`
	padding: 5px;
	padding-bottom: 0;
`;

export const Search = styled.TextInput`
	background-color: white;
	border-color: #e0e0e0;
	font-size: 20px;
	line-height: 30px;
	padding: 10px;
	border-width: 1px;
	border-radius: 15px;
`;
