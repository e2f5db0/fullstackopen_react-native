import { ApolloClient, useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/mutations"
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        try {
            const res = await mutate({
                variables: {
                    credentials: { username, password },
                }
            })
            await authStorage.setAccessToken(res.data.authenticate.accessToken)
            ApolloClient.resetStore();
            return res;
        } catch (error) {
            console.log('Authentication failed: ', error)
        }
    }
    return [signIn, result]
}

export default useSignIn;