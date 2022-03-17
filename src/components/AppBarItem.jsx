import { Pressable, Text, StyleSheet } from "react-native";
import { Link } from 'react-router-native';

const AppBarItem = ({ name, link }) => {

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
                <Link to={link}>
                    <Text style={styles.pressableItem}>
                        {name}
                    </Text>
                </Link>
            </Pressable>
        </>
    )
};

export default AppBarItem;
