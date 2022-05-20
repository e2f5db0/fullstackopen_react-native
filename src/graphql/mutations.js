import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation signIn($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const REVIEW = gql`
  mutation mkReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;