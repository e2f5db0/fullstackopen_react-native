import { Text, View } from 'react-native';

const RepositoryItem = ({ item }) => {
    return (
        <View>
            <Text>{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating avg: {item.ratingAverage}</Text>
        </View>
    )
};

export default RepositoryItem;
