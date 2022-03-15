import { View, StyleSheet } from 'react-native';
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
    return <View style={styles.container}>
        <AppBarItem name="Repositories" />
    </View>;
};

export default AppBar;