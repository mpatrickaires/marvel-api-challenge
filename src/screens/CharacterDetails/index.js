import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';

import * as Style from './style';

const CharacterDetails = props => {
    const { character, characterImage } = props.route.params;

    const listHeaderComponent = () => (
        <>
            <View>
                <Style.Image source={{ uri: characterImage }} />
            </View>
            <Style.TextContainer>
                <Style.Name>{character.name}</Style.Name>
                <Style.Text>
                    {character.description || 'No description available.'}
                </Style.Text>
                <Style.Comics>Comics:</Style.Comics>
            </Style.TextContainer>
        </>
    );

    return (
        <Style.Container>
            <FlatList
                ListHeaderComponent={listHeaderComponent}
                data={character.comics.items}
                renderItem={({ item: comics }) => (
                    <Style.TextContainer>
                        <Style.ComicsList>{`\u2022 ${comics.name}`}</Style.ComicsList>
                    </Style.TextContainer>
                )}
            />
        </Style.Container>
    );
};

export default CharacterDetails;
