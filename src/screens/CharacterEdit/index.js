import React, { useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CharacterActions from '../../store/actions/characters';

import { Formik } from 'formik';

const CharacterEdit = ({ navigation, route, editCharacter }) => {
    const { character } = route.params;

    useEffect(() =>
        navigation.setOptions({ title: `Editing: ${character.name}` }),
    );

    return (
        <View style={{ flex: 1 }}>
            <Formik
                initialValues={{
                    id: character.id,
                    name: character.name,
                    description: character.description,
                }}
                onSubmit={({ id, name, description }) => {
                    editCharacter(id, name, description);

                    character.name = name;
                    character.description = description;
                    navigation.navigate('CharacterDetails', { character });
                }}>
                {({ values, handleChange, handleSubmit }) => (
                    <View>
                        <Text>Name</Text>
                        <TextInput
                            placeholder="Digite um nome para o personagem..."
                            value={values.name}
                            onChangeText={handleChange('name')}
                        />
                        <Text>Description</Text>
                        <TextInput
                            placeholder="Descreva o personagem..."
                            value={values.description}
                            onChangeText={handleChange('description')}
                            multiline
                        />
                        <TouchableOpacity onPress={handleSubmit}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(CharacterActions, dispatch);

export default connect(null, mapDispatchToProps)(CharacterEdit);
