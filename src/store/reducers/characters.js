export default function characters(state = { characters: [] }, action) {
    const { type, payload } = action;
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
                    if (character.id === payload.id) {
                        character.name = payload.name;
                        character.description = payload.description;
                    }
                    return character;
                }),
            };

        default:
            return state;
    }
}
