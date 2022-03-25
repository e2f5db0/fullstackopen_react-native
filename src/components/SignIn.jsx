import { View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Button from './Button';
import { useField } from 'formik';

import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {

    const [username, usernameMeta, usernameHelpers] = useField('username');
    const [password, passwordMeta, passwordHelpers] = useField('password');

    return (
        <View>
            <FormikTextInput name="username" placeholder="Username" field={username} meta={usernameMeta} helpers={usernameHelpers} />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry field={password} meta={passwordMeta} helpers={passwordHelpers} />
            {/* both username and password variables include complete credentials */}
            <Button onSubmit={() => onSubmit(password)} />
        </View>
    );
};

const SignIn = () => {

    const onSubmit = (credentials) => {
        console.log(credentials);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;
