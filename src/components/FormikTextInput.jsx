import { StyleSheet } from 'react-native';
import Text from './Text';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "#d73a4a",
    marginLeft: 15,
    marginBottom: 10,
    lineHeight: 15
  },
});

const FormikTextInput = ({ ...props }) => {
  const showError = props.meta.touched && props.meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => props.helpers.setValue(value)}
        onBlur={() => props.helpers.setTouched(true)}
        value={props.field.value}
        error={showError}
        {...props}
      />
      {showError ? <Text style={styles.errorText}>{props.meta.error}</Text> : null}
    </>
  );
};

export default FormikTextInput;
