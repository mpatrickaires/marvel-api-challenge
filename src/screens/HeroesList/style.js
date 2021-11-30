import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 8px;
`;

export const HeroButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    padding: 8px;
`;

export const HeroImage = styled.Image`
    height: 80px;
    width: 80px;
    border-radius: 30px;
`;

export const HeroName = styled.Text`
    flex-shrink: 1;
    font-size: 26px;
    margin-left: 15px;
`;
