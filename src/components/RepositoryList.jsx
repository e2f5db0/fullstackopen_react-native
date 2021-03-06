import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';
import RepositoryListHeader from './RepositoryListHeader';

const styles = StyleSheet.create({
  viewContainer: {
    paddingBottom: 205
  },
  separator: {
    height: 10,
    backgroundColor: "lightgrey",
  },
});

export class RepositoryListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repositories: props.repositories,
      repositoryNodes: [],
      searchQuery: '',
    }
  }

  componentDidMount() {
    this.refreshRepos()
  }

  refreshRepos = () => {
    const { repositories } = this.state;
    const nodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];
    this.setState({ repositoryNodes: nodes })
  }

  updateSearch = (query) => {
    const { onChangeSearch } = this.props;
    onChangeSearch(query);
    this.setState({ searchQuery: query })
  }

  renderHeader = () => {
    const {
      selectedOrderBy,
      setSelectedOrderBy,
      searchQuery,
    } = this.props;

    return (
      <RepositoryListHeader
        selectedOrderBy={selectedOrderBy}
        setSelectedOrderBy={setSelectedOrderBy}
        onChangeSearch={(query) => this.updateSearch(query)}
        searchQuery={searchQuery}
      />
    );
  };

  render() {

    const {
      repositoryNodes,
    } = this.state;

    const {
      onEndReach,
    } = this.props;

    if (repositoryNodes.length > 0) {
      return (
        <View style={styles.viewContainer}>
          <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <PressableRepositoreyItem item={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={this.renderHeader}
            onEndReached={() => { onEndReach() && this.refreshRepos() }}
            onEndReachedThreshold={0.5}
          />
        </View>
      )
    } else {
      return null
    }

  }
}

const PressableRepositoreyItem = ({ item }) => {

  const navigate = useNavigate();

  return (
    <>
      <Pressable onPress={() => navigate(`/singleRepo/${item.id}`)}>
        <RepositoryItem item={item} />
      </Pressable>
    </>
  )
}

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const [selectedOrderBy, setSelectedOrderBy] = useState();
  const { repositories, fetchMore } = useRepositories(
    selectedOrderBy,
    debouncedSearchQuery,
    15
  );

  const onEndReach = () => {
    fetchMore();
  };

  if (repositories === undefined) {
    return null
  }
  return <RepositoryListContainer
    repositories={repositories}
    selectedOrderBy={selectedOrderBy}
    setSelectedOrderBy={setSelectedOrderBy}
    onChangeSearch={onChangeSearch}
    searchQuery={searchQuery}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;
