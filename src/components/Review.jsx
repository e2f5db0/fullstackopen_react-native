import { Formik } from 'formik';
import useReview from '../hooks/useReview';
import ReviewForm from './ReviewForm';
import { useNavigate } from 'react-router-native';

import * as yup from 'yup';

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
};

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required('Repository owner name is required'),
    repositoryName: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number()
        .min(0)
        .max(100)
        .typeError('Rating must be a number between 0 and 100')
        .required('Rating is required'),
    text: yup
        .string()
        .optional(),
});

export const ReviewContainer = ({ values, onSubmit }) => {
    return (
        <Formik
            initialValues={values}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const Review = () => {
    const [mkReview] = useReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { repositoryName, ownerName, rating, text } = values;
        try {
            const res = await mkReview({ repositoryName, ownerName, rating, text });
            navigate(`/singleRepo/${res.data.createReview.repositoryId}`)
        } catch (error) {
            console.log('Error: Review not created: ', error);
        }
    };

    return <ReviewContainer
        values={initialValues}
        onSubmit={onSubmit} />;
};

export default Review;
