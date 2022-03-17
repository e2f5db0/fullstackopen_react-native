import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarItem from './AppBarItem';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
        height: 100,
        flexDirection: 'row',
    }
});

const AppBar = () => {
    return (
        <>
            <View style={styles.container}>
                <ScrollView horizontal>
                    <AppBarItem name="Repositories" link={"/"} />
                    <AppBarItem name="Sign In" link={"/signIn"} />
                </ScrollView>
            </View>
        </>
    );
};

export default AppBar;