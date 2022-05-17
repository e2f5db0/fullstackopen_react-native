import { useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/mutations"

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        try {
            return await mutate({
                variables: {
                    credentials: { username, password },
                }
            })
        } catch (error) {
            console.log('Authentication failed: ', error)
        }
    }
    return [signIn, result]
}

export default useSignIn;