import styled from 'styled-components';

export const Container = styled.View`
    flex-grow: 1;
`;

export const Image = styled.Image`
    width: 100%;
    height: 400px;
`;

export const TextContainer = styled.View`
    padding: 12px;
`;

export const Name = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 10px;
`;

export const Text = styled.Text`
    font-size: 20px;
    text-align: justify;
`;

export const Comics = styled(Text)`
    font-weight: bold;
    margin-top: 30px;
`;

export const ComicsList = styled(Text)`
    margin-left: 15px;
`;