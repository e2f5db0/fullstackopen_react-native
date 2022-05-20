import { useApolloClient, useMutation } from "@apollo/client"
import { REVIEW } from "../graphql/mutations"
import useAuthStorage from '../hooks/useAuthStorage';

const useReview = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(REVIEW, {
        variables: {
            Authorization: `Bearer ${authStorage.getAccessToken()}`,
          },
    });

    const mkReview = async ({ repositoryName, ownerName, rating, text }) => {
        try {
            const res = await mutate({
                variables: {
                    review: {
                        repositoryName,
                        ownerName,
                        rating: Number(rating),
                        text
                    },
                }
            })
            await apolloClient.resetStore();
            return res;
        } catch (error) {
            console.log('Error: Review not created: ', error)
        }
    }
    return [mkReview, result]
}

export default useReview;