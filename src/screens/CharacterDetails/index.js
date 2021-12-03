import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Style from './style';

const CharacterDetails = ({ navigation, route }) => {
	const { character } = route.params;

	useEffect(() => navigation.setOptions({ title: character.name }));

	const characterImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;

	const listHeaderComponent = () => (
		<>
			<View>
				<Style.Image source={{ uri: characterImage }} />
			</View>
			<Style.TextContainer>
				<Style.Name>{character.name}</Style.Name>
				<Style.Text>
					{character.description || 'No description available.'}
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
			<Style.EditButton
				onPress={() =>
					navigation.navigate('CharacterEdit', {
						character,
					})
				}>
				<Icon name="pencil" size={30} color="white" />
			</Style.EditButton>
		</Style.Container>
	);
};

export default CharacterDetails;
