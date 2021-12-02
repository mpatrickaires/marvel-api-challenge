import fetchMarvelApi from '../../data/request';

const setCharacters = characters => {
    return {
        type: 'SET_CHARACTERS',
        payload: {
            characters,
        },
    };
};

export const getCharacters = () => async dispatch => {
    const characters = await fetchMarvelApi();
    dispatch(setCharacters(characters));
};

export function editCharacter(id, name, description) {
    return {
        type: 'EDIT_CHARACTER',
        payload: {
            id,
            name,
            description,
        },
    };
}
