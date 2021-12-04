import actionsType from '../actions/actionsType';

const INITIAL_STATE = {
	characters: [],
};

export default function characters(
	state = INITIAL_STATE,
	{ type, payload } = {},
) {
	switch (type) {
		case actionsType.SET_CHARACTERS:
			return {
				...state,
				characters: payload.characters,
			};

		case actionsType.EDIT_CHARACTER:
			return {
				...state,
				characters: state.characters.map(character => {
					const newCharacter = character;

					if (newCharacter.id === payload.id) {
						newCharacter.name = payload.name;
						newCharacter.description = payload.description;
					}

					return newCharacter;
				}),
			};

		default:
			return state;
	}
}
