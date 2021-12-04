import actionsType from './actionsType';

import fetchMarvelApi from '../../data/request';

import * as global from './global';

const setCharacters = characters => ({
	type: actionsType.SET_CHARACTERS,
	payload: {
		characters,
	},
});

export const getCharacters = () => async dispatch => {
	try {
		dispatch(global.loading());

		const characters = await fetchMarvelApi().then(
			async response => response.data.data.results,
		);

		dispatch(setCharacters(characters));

		dispatch(global.success());
	} catch (error) {
		dispatch(global.error(error.toString()));
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
