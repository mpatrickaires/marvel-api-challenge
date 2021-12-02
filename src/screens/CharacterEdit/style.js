import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 12px;
`;

export const InputContainer = styled.View`
    margin-bottom: 10px;
`;

export const InputTitle = styled.Text`
    font-size: 20px;
`;

export const Input = styled.TextInput`
    background-color: white;
    border-color: #e0e0e0;
    font-size: 20px;
    line-height: 30px;
    padding: 10px;
    border-width: 1px;
    border-radius: 15px;
`;

export const ErrorMessage = styled.Text`
    color: #ed1d24;
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #24a0ed;
    height: 45px;
    width: 100%;
    border-radius: 13px;
`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 20px;
`;
