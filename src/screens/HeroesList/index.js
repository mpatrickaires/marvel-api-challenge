import React, { useEffect, useState } from 'react';
import { View, FlatList, ImageBackground } from 'react-native';

import * as Style from './style';

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
        <Style.Container>
            <Style.HeroButton
                onPress={() => props.navigation.navigate('HeroDetails')}>
                <Style.HeroImage
                    source={{
                        uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
                    }}
                />
                <Style.HeroName>{hero.name}</Style.HeroName>
            </Style.HeroButton>
        </Style.Container>
    );

    return (
        <View>
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
