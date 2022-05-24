import { Formik } from 'formik';
import useSignUp from '../hooks/useSignUp';
import SignUpForm from './SignUpForm';
import { useNavigate } from 'react-router-native';

import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
    confirmation: '',
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1)
        .max(30)
        .required('Username is required'),
    password: yup
        .string()
        .min(5)
        .max(50)
        .required('Password is required'),
    confirmation: yup
        .string()
        .min(5)
        .max(50)
        .oneOf([yup.ref('password'), null], "Passwords don't match")
        .required('Password confirmation is required'),
});

export const SignUpContainer = ({ credentials, onSubmit }) => {
    return (
        <Formik
            initialValues={credentials}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const SignIn = () => {
    const [signUp] = useSignUp()
    const navigate = useNavigate();

    const onSubmit = async (credentials) => {
        const { username, password } = credentials;
        try {
            await signUp({ username, password });
            navigate('/')
        } catch (error) {
            console.log('Authentication error: ', error);
        }
    };

    return <SignUpContainer
        credentials={initialValues}
        onSubmit={onSubmit} />;
};

export default SignIn;
