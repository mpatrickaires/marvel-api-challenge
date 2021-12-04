import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { connect } from 'react-redux';

import { getCharacters } from '../../store/actions/characters';

import { store } from '../../store';

import * as Style from './style';

const CharactersList = ({ navigation, characters, loading }) => {
	useEffect(() => {
		if (!characters?.length) {
			store.dispatch(getCharacters());
		}
	}, []);

	const [searchFilter, setSearchFilter] = useState('');

	const renderLoading = () => (
		<Style.LoadingContainer>
			<ActivityIndicator size="large" color="#ed1d24" />
			<Style.LoadingMessage>
				Hang on! Characters incoming...
			</Style.LoadingMessage>
		</Style.LoadingContainer>
	);

	const renderCharactersList = ({ item: character }) => {
		const characterImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;

		return (
			<Style.CharacterContainer>
				<Style.CharacterButton
					onPress={() => {
						navigation.navigate('CharacterDetails', {
							character,
							characterImage,
						});
					}}>
					<Style.CharacterImage
						source={{
							uri: characterImage,
						}}
					/>
					<Style.CharacterName>{character.name}</Style.CharacterName>
				</Style.CharacterButton>
			</Style.CharacterContainer>
		);
	};

	const charactersList = () => {
		const filteredCharacters = characters?.filter(character =>
			character.name
				.toLowerCase()
				.includes(searchFilter.trim().toLowerCase()),
		);

		return (
			<FlatList
				data={filteredCharacters}
				keyExtractor={character => character.id}
				renderItem={renderCharactersList}
			/>
		);
	};

	return (
		<Style.Container>
			{loading && renderLoading()}
			<Style.SearchContainer>
				<Style.Search
					placeholder="Type the character name..."
					value={searchFilter}
					onChangeText={setSearchFilter}
				/>
			</Style.SearchContainer>
			{characters?.length > 0 && !loading && charactersList()}
		</Style.Container>
	);
};

const mapStateToProps = state => ({
	characters: state.characters.characters,
	loading: state.characters.loading,
});

export default connect(mapStateToProps)(CharactersList);
