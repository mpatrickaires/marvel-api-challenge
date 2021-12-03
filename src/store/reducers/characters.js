export default function characters(
	state = { characters: [] },
	{ type, payload } = {},
) {
	switch (type) {
		case 'SET_CHARACTERS':
			return {
				...state,
				characters: payload.characters,
			};

		case 'EDIT_CHARACTER':
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
