import actionsType from './actionsType';

import fetchMarvelApi from '../../data/request';

const setCharacters = characters => ({
	type: actionsType.SET_CHARACTERS,
	payload: {
		characters,
	},
});

export const loadingCharacters = () => ({
	type: actionsType.LOADING_CHARACTERS,
});

export const getCharacters = () => async dispatch => {
	try {
		dispatch(loadingCharacters());
		const characters = await fetchMarvelApi().then(
			async response => response.data.data.results,
		);
		dispatch(setCharacters(characters));
	} catch (error) {
		console.warn(error);
	}
};

export const editCharacter = (id, name, description) => ({
	type: actionsType.EDIT_CHARACTER,
	payload: {
		id,
		name,
		description,
	},
});
