import { Formik } from 'formik';
import useSignIn from '../hooks/useSignIn';
import SignInForm from './SignInForm';
import { useNavigate } from 'react-router-native';

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

export const SignInContainer = ({ credentials, onSubmit }) => {
    return (
        <Formik
            initialValues={credentials}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const SignIn = () => {
    const [signIn] = useSignIn()
    const navigate = useNavigate();

    const onSubmit = async (credentials) => {
        const { username, password } = credentials;
        try {
            await signIn({ username, password });
            navigate('/')
        } catch (error) {
            console.log('Authentication error: ', error);
        }
    };

    return <SignInContainer
        credentials={initialValues}
        onSubmit={onSubmit} />;
};

export default SignIn;
