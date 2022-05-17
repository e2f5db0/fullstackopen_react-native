import { Formik } from 'formik';
import useSignIn from '../hooks/useSignIn';
import SignInForm from './SignInForm';

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

const SignIn = () => {
    const [signIn] = useSignIn()

    const onSubmit = async (credentials) => {
        const { username, password } = credentials;
        try {
          const { data } = await signIn({ username, password });
          console.log(data);
        } catch (error) {
          console.log('Authentication error: ', error);
        }
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
