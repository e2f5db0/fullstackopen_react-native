import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "lightgrey",
  },
});

export const RepositoryListContainer = ({ repositories, selectedOrderBy, setSelectedOrderBy }) => {


  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Pressable onPress={() => navigate(`/singleRepo/${item.id}`)}><RepositoryItem item={item} /></Pressable>}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => {
        return (
          <Picker
            selectedValue={selectedOrderBy}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedOrderBy(itemValue)
            }>
            <Picker.Item label="Latest repositories" value="latest" />
            <Picker.Item label="Rated highest" value="ratedHighest" />
            <Picker.Item label="Rated lowest" value="ratedLowest" />
          </Picker>
        )
      }}
    />
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [selectedOrderBy, setSelectedOrderBy] = useState();
  const { repositories } = useRepositories(selectedOrderBy);

  return <RepositoryListContainer
    repositories={repositories}
    selectedOrderBy={selectedOrderBy}
    setSelectedOrderBy={setSelectedOrderBy}
  />;
};

export default RepositoryList;
