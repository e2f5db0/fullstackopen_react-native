import { Text, View, Image, StyleSheet } from 'react-native';
import Button from './Button';
import * as Linking from 'expo-linking';

const RepositoryItem = ({ item, singleView }) => {

    const styles = StyleSheet.create({
        image: {
            width: 50,
            height: 50,
            borderRadius: 5,
        },
        upperContainer: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10,
        },
        upperContainerLeft: {
            width: 50,
        },
        upperContainerRight: {
            width: 300,
            justifyContent: 'space-evenly',
            height: 95,
            alignItems: "flex-start",
        },
        middleContainer: {
            flexDirection: 'row',
            justifyContent: "space-evenly",
        },
        middleContainerItem: {
            padding: 10
        },
        lowerContainer: {
            flexDirection: 'row',
            justifyContent: "space-evenly",
        },
        bold: {
            fontWeight: "bold",
        },
        language: {
            backgroundColor: "#0464CF",
            color: "white",
            borderRadius: 5,
            padding: 4,
            marginTop: 5,
        },
        grey: {
            color: "grey",
        }
    });

    const kFormat = (num) => {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }

    const openInGitHub = (url) => {
        Linking.openURL(url)
    }

    return (
        <>
            <View style={styles.upperContainer}>
                <View style={styles.upperContainerLeft}>
                    <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
                </View>
                <View style={styles.upperContainerRight}>
                    <Text testID='fullName' style={styles.bold}>{item.fullName}</Text>
                    <Text testID='description' style={styles.grey}>{item.description}</Text>
                    <Text testID='language' style={styles.language}>{item.language}</Text>
                </View>
            </View>
            <View testID='repoStats' style={styles.middleContainer}>
                <View style={styles.middleContainerItem}>
                    <Text testID='starCount' style={styles.bold}>{kFormat(item.stargazersCount)}</Text>
                    <Text style={styles.grey}>Stars</Text>
                </View>
                <View style={styles.middleContainerItem}>
                    <Text testID='forkCount' style={styles.bold}>{kFormat(item.forksCount)}</Text>
                    <Text style={styles.grey}>Forks</Text>
                </View>
                <View style={styles.middleContainerItem}>
                    <Text testID='reviewCount' style={styles.bold}>{kFormat(item.reviewCount)}</Text>
                    <Text style={styles.grey}>Reviews</Text>
                </View>
                <View style={styles.middleContainerItem}>
                    <Text testID='ratingAvg' style={styles.bold}>{kFormat(item.ratingAverage)}</Text>
                    <Text style={styles.grey}>Rating</Text>
                </View>
            </View>
            <View style={styles.lowerContainer}>
                {singleView ? <Button onSubmit={() => openInGitHub(item.url)} text='Open in GitHub' /> : null}
            </View>
        </>
    )
};

export default RepositoryItem;
