export default function characters(state = { characters: [] }, action) {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CHARACTERS':
            return {
                ...state,
                characters: payload.characters,
            };

        case 'EDIT_CHARACTER':
            let characterFocus;
            return {
                ...state,
                characters: state.characters.map(character => {
                    if (character.id === payload.id) {
                        character.name = payload.name;
                        character.description = payload.description;
                        characterFocus = character;
                    }
                    return character;
                }),
                characterFocus,
            };

        default:
            return state;
    }
}
