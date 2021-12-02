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
    try {
        const characters = await fetchMarvelApi();
        dispatch(setCharacters(characters));
    } catch (error) {
        console.warn(error);
    }
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
