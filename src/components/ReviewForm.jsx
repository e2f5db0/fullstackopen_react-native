import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View } from 'react-native';
import Button from './Button';

const ReviewForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput
                name="ownerName"
                placeholder="Repository owner name"
            />
            <FormikTextInput
                name="repositoryName"
                placeholder="Repository name"
            />
            <FormikTextInput
                name="rating"
                placeholder="Rating between 0 and 100"
            />
            <FormikTextInput
                name="text"
                placeholder="Review"
                multiline
            />
            <Button
                onSubmit={onSubmit}
                text='Create a review'
            />
        </View>
    );
};

export default ReviewForm;