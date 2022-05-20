import { useQuery } from "@apollo/client";
import { FlatList, View, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import { GET_SINGLE_REPO } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import { format } from 'date-fns'

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: "lightgrey",
    },
    reviewContainer: {
        padding: 10,
        flexDirection: "row",
    },
    reviewLeftContainer: {
        width: 80,
    },
    reviewRightContainer: {
        width: 300
    },
    rating: {
        color: "#4977B5",
        fontSize: 25,
        borderWidth: 3,
        borderColor: "#4977B5",
        borderRadius: 50,
        width: 70,
        height: 70,
        paddingTop: 17,
        fontWeight: "bold",
        textAlign: "center",
    },
    reviewUser: {
        fontWeight: "bold",
    },
    reviewDate: {
        color: "grey",
    }
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
    return (
        <RepositoryItem item={repository} singleView />
    );
}

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.reviewContainer}>
            <View style={styles.reviewLeftContainer}>
                <Text style={styles.rating}>{review.rating}</Text>
            </View>
            <View style={styles.reviewRightContainer}>
                <Text style={styles.reviewUser}>{review.user.username}</Text>
                <Text style={styles.reviewDate}>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
                <Text>{review.text}</Text>

            </View>
        </View>
    );
}

const SingleRepo = () => {

    const { repositoryId } = useParams();
    const { data, loading } = useQuery(GET_SINGLE_REPO, {
        fetchPolicy: 'cache-and-network',
        variables: {
            repositoryId: repositoryId,
        },
    })

    if (loading) {
        return (
            <Text>Loading...</Text>
        )
    } else {
        const reviews = data.repository.reviews
        const reviewNodes = reviews
            ? reviews.edges.map(edge => edge.node)
            : [];
        return (
            <FlatList
                data={reviewNodes}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
                ItemSeparatorComponent={ItemSeparator}
            />
        );
    }
};

export default SingleRepo;
