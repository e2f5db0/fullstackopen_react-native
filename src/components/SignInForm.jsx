import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View } from 'react-native';
import Button from './Button';

const SignInForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput
                name="username"
                placeholder="Username" />
            <FormikTextInput
                name="password"
                placeholder="Password"
                secureTextEntry />
            <Button
                onSubmit={onSubmit}
                text='Sign In' />
        </View>
    );
};

export default SignInForm;