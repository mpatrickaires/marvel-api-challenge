import actionsType from '../actions/actionsType';

export default function characters(
	state = { characters: [], loading: false },
	{ type, payload } = {},
) {
	switch (type) {
		case actionsType.SET_CHARACTERS:
			return {
				...state,
				characters: payload.characters,
				loading: false,
			};

		case actionsType.LOADING_CHARACTERS:
			return {
				...state,
				loading: true,
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
