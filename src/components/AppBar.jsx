import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarItem from './AppBarItem';
import Text from './Text';
import useAuthStorage from '../hooks/useAuthStorage';
import { useQuery, useApolloClient } from '@apollo/client';
import { ME } from '../graphql/queries';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
        height: 100,
        flexDirection: 'row',
    }
});

const AppBar = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const { data, loading } = useQuery(ME, {
        variables: {
            Authorization: `Bearer ${authStorage.getAccessToken()}`,
        },
    });

    const signOut = async () => {
        await authStorage.removeAccessToken()
        await apolloClient.resetStore()
    }

    if (loading) {
        return (
            <>
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            </>
        )
    } else {
        return (
            <>
                <View style={styles.container}>
                    <ScrollView horizontal>
                        <AppBarItem name="Repositories" link={"/"} />
                        {data.me ? <AppBarItem name="Create a review" link={"/review"} /> : null}
                        {!data.me ? <AppBarItem name="Sign In" link={"/signIn"} /> : null}
                        {data.me ? <AppBarItem name="Sign out" signOut={signOut} /> : null}
                        {!data.me ? <AppBarItem name="Sign up" link={"/signUp"} /> : null}
                    </ScrollView>
                </View>
            </>
        );
    };
}

export default AppBar;