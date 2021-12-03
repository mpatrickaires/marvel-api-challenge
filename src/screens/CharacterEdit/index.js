import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Formik } from 'formik';
import * as yup from 'yup';

import * as CharacterActions from '../../store/actions/characters';
import * as Style from './style';

const characterSchema = yup.object({
	name: yup.string().required("'Name' is a required field").min(1),
});

const CharacterEdit = ({ navigation, route, editCharacter }) => {
	const { character } = route.params;

	useEffect(() =>
		navigation.setOptions({ title: `Editing: ${character.name}` }),
	);

	return (
		<ScrollView>
			<Style.Container>
				<Formik
					initialValues={{
						id: character.id,
						name: character.name,
						description: character.description,
					}}
					validationSchema={characterSchema}
					onSubmit={({ id, name, description }) => {
						editCharacter(id, name, description);
						character.name = name;
						character.description = description;
						navigation.navigate('CharacterDetails', { character });
					}}>
					{({ values, errors, handleChange, handleSubmit }) => (
						<View>
							<Style.InputContainer>
								<Style.InputTitle>Name</Style.InputTitle>
								<Style.Input
									placeholder="Enter the character name..."
									value={values.name}
									onChangeText={handleChange('name')}
								/>
								<Style.ErrorMessage>
									{errors.name}
								</Style.ErrorMessage>
							</Style.InputContainer>
							<Style.InputContainer>
								<Style.InputTitle>Description</Style.InputTitle>
								<Style.Input
									placeholder="Enter the character description..."
									value={values.description}
									onChangeText={handleChange('description')}
									multiline
								/>
								<Style.ErrorMessage>
									{errors.description}
								</Style.ErrorMessage>
							</Style.InputContainer>
							<Style.Button onPress={handleSubmit}>
								<Style.ButtonText>SAVE</Style.ButtonText>
							</Style.Button>
						</View>
					)}
				</Formik>
			</Style.Container>
		</ScrollView>
	);
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(CharacterActions, dispatch);

export default connect(null, mapDispatchToProps)(CharacterEdit);
