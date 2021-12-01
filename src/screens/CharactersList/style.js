import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const CharacterContainer = styled.View`
    padding: 8px;
`;

export const CharacterButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    padding: 8px;
`;

export const CharacterImage = styled.Image`
    height: 80px;
    width: 80px;
    border-radius: 30px;
`;

export const CharacterName = styled.Text`
    flex-shrink: 1;
    font-size: 26px;
    margin-left: 15px;
`;

export const SearchContainer = styled.View`
    border-color: #e0e0e0;
    border-width: 1px;
    border-radius: 20px;
    margin-top: 5px;
    padding: 5px;
`;

export const Search = styled.TextInput`
    font-size: 20px;
`;
