import { useApolloClient, useMutation } from "@apollo/client"
import { SIGN_UP } from "../graphql/mutations"
import useAuthStorage from '../hooks/useAuthStorage';
import useSignIn from "./useSignIn";

const useSignUp = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [mutateSingUp, resultSignUp] = useMutation(SIGN_UP);
    const [signIn] = useSignIn();

    const signUp = async ({ username, password }) => {
        try {
            const resSignUp = await mutateSingUp({
                variables: {
                    user: { username, password },
                }
            })
            const resSignIn = await signIn({ username, password });
            await authStorage.setAccessToken(resSignIn.data.authenticate.accessToken)
            await apolloClient.resetStore();
            return resSignUp;
        } catch (error) {
            console.log('Sign up failed: ', error)
        }
    }
    return [signUp, resultSignUp]
}

export default useSignUp;