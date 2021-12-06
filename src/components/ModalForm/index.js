import React from 'react';
import { View, ScrollView, Modal } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Formik } from 'formik';
import * as yup from 'yup';

import * as CharacterActions from '../../store/actions/characters';
import * as Style from './style';

const characterSchema = yup.object({
	name: yup.string().trim().required("'Name' is a required field").min(1),
});

const ModalForm = ({ visible, character, dispatch, editCharacter }) => {
	const updateCharacter = (name, description) => {
		dispatch({
			character: {
				...character,
				name,
				description,
			},
			showModal: false,
			fadeMessage: 'Character saved!',
		});
	};

	const cancel = () => {
		dispatch({ showModal: false });
	};

	return (
		<Modal visible={visible} animationType="slide" onRequestClose={cancel}>
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
							updateCharacter(name, description);
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
									<Style.InputTitle>
										Description
									</Style.InputTitle>
									<Style.Input
										placeholder="Enter the character description..."
										value={values.description}
										onChangeText={handleChange(
											'description',
										)}
										multiline
									/>
									<Style.ErrorMessage>
										{errors.description}
									</Style.ErrorMessage>
								</Style.InputContainer>

								<Style.ButtonContainer>
									<Style.CancelButton onPress={cancel}>
										<Style.ButtonText>
											CANCEL
										</Style.ButtonText>
									</Style.CancelButton>
									<Style.SaveButton onPress={handleSubmit}>
										<Style.ButtonText>
											SAVE
										</Style.ButtonText>
									</Style.SaveButton>
								</Style.ButtonContainer>
							</View>
						)}
					</Formik>
				</Style.Container>
			</ScrollView>
		</Modal>
	);
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(CharacterActions, dispatch);

export default connect(null, mapDispatchToProps)(ModalForm);
