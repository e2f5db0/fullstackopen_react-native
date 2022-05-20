import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { GET_SINGLE_REPO } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const SingleRepo = () => {

    const { repositoryId } = useParams();
    const { data, loading } = useQuery(GET_SINGLE_REPO, {
        variables: {
            repositoryId: repositoryId,
        },
    })

    if (loading) {
        return (
            <Text>Loading...</Text>
        )
    } else {
        return (
            <RepositoryItem item={data.repository} singleView />
        )
    }
};

export default SingleRepo;
