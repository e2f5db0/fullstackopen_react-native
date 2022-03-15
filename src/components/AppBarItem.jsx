import { Pressable, Text, StyleSheet } from "react-native";

const AppBarItem = ({ name }) => {

    const styles = StyleSheet.create({
        pressableItem: {
            color: "#FEFDFD",
            padding: 10,
            fontWeight: "bold",
        }
    });

    return (
        <>
        <Pressable>
            <Text style={styles.pressableItem}>
                {name}
            </Text>
        </Pressable>
        </>
    )
};

export default AppBarItem;
