import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const styles = StyleSheet.create({

});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput
                name="username"
                placeholder="Username" />
            <FormikTextInput
                name="password"
                placeholder="Password"
                secureTextEntry />
            <Button onSubmit={onSubmit} />
        </View>
    );
};

export default SignInForm;