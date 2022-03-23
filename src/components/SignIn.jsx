import { View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Button from './Button';

const initialValues = {
    username: '',
    password: '',
};

const SignInForm = ({ onSubmit }) => {

    return (
        <View>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <Button onSubmit={onSubmit} />
        </View>
    );
};

const SignIn = () => {

    const onSubmit = values => {
        const username = parseFloat(values.username);
        const password = parseFloat(values.password);

        if (!isNaN(username) && !isNaN(password)) {
            console.log(values);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;
