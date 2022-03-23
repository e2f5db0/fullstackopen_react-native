import { Pressable, Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: "#0165D4",
        margin: 5,
        borderRadius: 3,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    btn: {
        fontWeight: "bold",
        fontSize: 20,
        color: "gainsboro",
    }
})

const Button = ({ onSubmit }) => {
    return (
        <View style={styles.btnContainer}>
            <Pressable onPress={onSubmit}>
                <Text style={styles.btn}>Sign In</Text>
            </Pressable>
        </View>
    )
}

export default Button;
