import '../config/ReactotronConfig';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composer = __DEV__
	? compose(applyMiddleware(thunk), console.tron.createEnhancer())
	: compose(applyMiddleware(thunk));

const store = createStore(persistedReducer, composer);

const persistor = persistStore(store);

export { store, persistor };
