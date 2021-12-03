import md5 from 'js-md5';

import api from '../services/api';

const PUBLIC_KEY = '3c2cca6ead9cc726bf1ba711cb45674d';
const PRIVATE_KEY = 'a22935d7613d4da854630069e7bd2dedb19fcb31';
const timestamp = Number(new Date());

const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export default () =>
	// const response = await api.get(
	// 	`characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
	// );

	// return response.data.data.results;

	api.get(
		`characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
	);
