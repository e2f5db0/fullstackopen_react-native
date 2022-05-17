import { Pressable, Text, StyleSheet } from "react-native";
import { Link } from 'react-router-native';

const AppBarItem = ({ name, link, signOut }) => {

    const styles = StyleSheet.create({
        pressableItem: {
            color: "#FEFDFD",
            padding: 10,
            fontWeight: "bold",
        }
    });

    if (signOut) {
        return (
            <>
                <Pressable onPress={signOut}>
                    <Text style={styles.pressableItem}>{name}</Text>
                </Pressable>
            </>
        );
    } else {
        return (
            <>
                <Pressable>
                    <Link to={link}>
                        <Text style={styles.pressableItem}>
                            {name}
                        </Text>
                    </Link>
                </Pressable>
            </>
        );
    }
};

export default AppBarItem;
