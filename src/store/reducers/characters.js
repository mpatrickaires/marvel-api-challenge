export default function characters(state = {}, action) {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return {
                ...state,
                characters: action.payload.characters,
            };

        case 'EDIT_CHARACTER':
            return {
                ...state,
                characters: state.characters.map(character =>
                    character.id === action.character.id
                        ? action.character
                        : character,
                ),
            };

        default:
            return state;
    }
}
