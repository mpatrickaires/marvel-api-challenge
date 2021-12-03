import fetchMarvelApi from '../../data/request';

const setCharacters = characters => ({
	type: 'SET_CHARACTERS',
	payload: {
		characters,
	},
});

export const getCharacters = () => async dispatch => {
	try {
		const characters = await fetchMarvelApi().then(
			async response => response.data.data.results,
		);
		dispatch(setCharacters(characters));
	} catch (error) {
		console.warn(error);
	}
};

export const editCharacter = (id, name, description) => ({
	type: 'EDIT_CHARACTER',
	payload: {
		id,
		name,
		description,
	},
});
