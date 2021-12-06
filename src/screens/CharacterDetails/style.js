import styled from 'styled-components';

export const Container = styled.View`
	flex-grow: 1;
`;

export const Image = styled.Image`
	width: 100%;
	height: 400px;
`;

export const TextContainer = styled.View`
	padding: 12px;
`;

export const Name = styled.Text`
	text-align: center;
	font-weight: bold;
	font-size: 28px;
	margin-bottom: 10px;
`;

export const Text = styled.Text`
	text-align: justify;
	line-height: 30px;
	font-size: 20px;
`;

export const Comics = styled(Text)`
	font-weight: bold;
	margin-top: 30px;
`;

export const ComicsList = styled(Text)`
	margin-left: 15px;
`;

export const EditButton = styled.TouchableOpacity`
	background-color: #ed1d24;
	position: absolute;
	justify-content: center;
	align-items: center;
	right: 20px;
	bottom: 30px;
	height: 50px;
	width: 50px;
	border-radius: 25px;
`;
