import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View } from 'react-native';
import Button from './Button';

const SignUpForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput
                name="username"
                placeholder="Username" />
            <FormikTextInput
                name="password"
                placeholder="Password"
                secureTextEntry />
            <FormikTextInput
                name="confirmation"
                placeholder="Password confirmation"
                secureTextEntry />
            <Button
                onSubmit={onSubmit}
                text='Sign Up' />
        </View>
    );
};

export default SignUpForm;