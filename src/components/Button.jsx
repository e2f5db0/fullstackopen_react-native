import { Pressable, Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    btnContainer: {
        width: 370,
        backgroundColor: "#0165D4",
        margin: 5,
        borderRadius: 3,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    btn: {
        fontSize: 20,
        color: "white",
        padding: 10,
    }
})

const Button = ({ onSubmit, text }) => {
    return (
        <Pressable style={styles.btnContainer} onPress={onSubmit}>
            <View>
                <Text style={styles.btn}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default Button;
