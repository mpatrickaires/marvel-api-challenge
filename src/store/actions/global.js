import actionsType from './actionsType';

export const loading = () => ({
	type: actionsType.LOADING,
});

export const success = () => ({
	type: actionsType.SUCCESS,
});

export const error = error => ({
	type: actionsType.ERROR,
	payload: {
		error,
	},
});
