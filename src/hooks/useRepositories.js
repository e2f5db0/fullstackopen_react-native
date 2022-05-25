import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedOrderBy) => {
  let ordering;
  let ascDesc = 'DESC';
  if (selectedOrderBy === 'latest') ordering = 'CREATED_AT'
  if (selectedOrderBy === 'ratedHighest') ordering = 'RATING_AVERAGE'
  if (selectedOrderBy === 'ratedLowest') {
    ordering = 'RATING_AVERAGE'
    ascDesc = 'ASC'
  }
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: ordering,
      orderDirection: ascDesc,
    }
  });

  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;