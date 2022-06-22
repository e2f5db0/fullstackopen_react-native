import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedOrderBy, searchQuery, first) => {
  let ordering;
  let ascDesc = 'DESC';
  if (selectedOrderBy === 'latest') ordering = 'CREATED_AT'
  if (selectedOrderBy === 'ratedHighest') ordering = 'RATING_AVERAGE'
  if (selectedOrderBy === 'ratedLowest') {
    ordering = 'RATING_AVERAGE'
    ascDesc = 'ASC'
  }
  const variables = {
    orderBy: ordering,
    orderDirection: ascDesc,
    searchKeyword: searchQuery,
    first,
  }
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepositories;