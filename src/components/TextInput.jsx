import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputValid: {
        borderColor: "#BBBBBB",
        borderWidth: 2,
        padding: 10,
        margin: 5,
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 10,
    },
    inputInvalid: {
        borderColor: "red",
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, error ? styles.inputInvalid : styles.inputValid];

    return <NativeTextInput {...props} style={textInputStyle} />;
};

export default TextInput;
