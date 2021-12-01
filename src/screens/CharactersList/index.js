import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    ImageBackground,
    TextInput,
    Text,
    TouchableOpacity,
    Keyboard,
} from 'react-native';

import * as Style from './style';

import md5 from 'js-md5';

const CharactersList = props => {
    const PUBLIC_KEY = '3c2cca6ead9cc726bf1ba711cb45674d';
    const PRIVATE_KEY = 'a22935d7613d4da854630069e7bd2dedb19fcb31';

    useEffect(() => {
        const fetchMarvelAPI = async () => {
            const timestamp = Number(new Date());
            const hash = md5.create();
            hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

            const response = await fetch(
                `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
            );

            const responseJson = await response.json();

            setCharacters(responseJson.data.results);
        };
        fetchMarvelAPI();
    }, []);

    const [characters, setCharacters] = useState();
    const [searchFilter, setSearchFilter] = useState('');

    const renderCharactersList = ({ item: character }) => {
        const characterImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;

        return (
            <Style.Container>
                <Style.CharacterButton
                    onPress={() =>
                        props.navigation.navigate('CharacterDetails', {
                            character,
                            characterImage,
                        })
                    }>
                    <Style.CharacterImage
                        source={{
                            uri: characterImage,
                        }}
                    />
                    <Style.CharacterName>{character.name}</Style.CharacterName>
                </Style.CharacterButton>
            </Style.Container>
        );
    };

    const charactersList = () => {
        const filteredCharacters = characters?.filter(character =>
            character.name
                .toLowerCase()
                .includes(searchFilter.trim().toLowerCase()),
        );

        return (
            <FlatList
                data={filteredCharacters}
                keyExtractor={character => character.id}
                renderItem={renderCharactersList}
            />
        );
    };

    return (
        <View>
            <Style.SearchContainer>
                <Style.Search
                    placeholder="Digite o nome do personagem..."
                    value={searchFilter}
                    onChangeText={setSearchFilter}
                />
            </Style.SearchContainer>
            {charactersList()}
        </View>
    );
};

export default CharactersList;
