import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import Review from './Review';
import SignIn from './SignIn';
import SingleRepo from './SingleRepo';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/signIn" element={<SignIn />} exact />
                <Route path="/review" element={<Review />} exact />
                <Route path="/singleRepo/:repositoryId" element={<SingleRepo />} exact />
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    );
};

export default Main;