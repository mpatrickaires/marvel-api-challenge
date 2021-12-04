import actionsType from '../actions/actionsType';

const INITIAL_STATE = {
	loading: false,
	error: false,
};

export default function global(state = INITIAL_STATE, { type, payload } = {}) {
	switch (type) {
		case actionsType.LOADING:
			return {
				...state,
				loading: true,
			};

		case actionsType.SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
			};

		case actionsType.ERROR:
			console.warn(payload.error);
			return {
				...state,
				loading: false,
				error: payload.error,
			};

		default:
			return state;
	}
}
