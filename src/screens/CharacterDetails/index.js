import React, { useEffect, useReducer } from 'react';
import { View, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ModalForm from '../../components/ModalForm';

import * as Style from './style';

const CharacterDetails = ({ navigation, route }) => {
	const { character } = route.params;

	const [state, dispatch] = useReducer(
		(state, action) => ({ ...state, ...action }),
		{ character, showModal: false },
	);

	useEffect(() => navigation.setOptions({ title: character.name }));

	const characterImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;

	const listHeaderComponent = () => (
		<>
			<ModalForm
				visible={state.showModal}
				character={state.character}
				dispatch={dispatch}
			/>
			<View>
				<Style.Image source={{ uri: characterImage }} />
			</View>
			<Style.TextContainer>
				<Style.Name>{state.character.name}</Style.Name>
				<Style.Text>
					{state.character.description || 'No description available.'}
				</Style.Text>
				<Style.Comics>Comics:</Style.Comics>
			</Style.TextContainer>
		</>
	);

	return (
		<Style.Container>
			<FlatList
				ListHeaderComponent={listHeaderComponent}
				data={character.comics.items}
				renderItem={({ item: comics }) => (
					<Style.TextContainer>
						<Style.ComicsList>{`\u2022 ${comics.name}`}</Style.ComicsList>
					</Style.TextContainer>
				)}
			/>
			<Style.EditButton onPress={() => dispatch({ showModal: true })}>
				<Icon name="pencil" size={30} color="white" />
			</Style.EditButton>
			{/* TODO: Message popup on character edit save */}
		</Style.Container>
	);
};

export default CharacterDetails;
