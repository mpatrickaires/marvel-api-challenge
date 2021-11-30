import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import md5 from 'js-md5';

const HeroesList = props => {
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

            setHeroes(responseJson.data.results);
        };
        fetchMarvelAPI();
    }, []);

    const [heroes, setHeroes] = useState();

    const renderHeroesList = ({ item: hero }) => (
        <View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('HeroDetails')}>
                <Text>{hero.name}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <Text>HeroesList</Text>
            {heroes && (
                <FlatList
                    data={heroes}
                    keyExtractor={hero => hero.id}
                    renderItem={renderHeroesList}
                />
            )}
        </View>
    );
};

export default HeroesList;
