import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

const RepositoryListHeader = ({
    onChangeSearch,
    searchQuery,
    selectedOrderBy,
    setSelectedOrderBy }) => {
    return (
        <>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Picker
                selectedValue={selectedOrderBy}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedOrderBy(itemValue)
                }>
                <Picker.Item label="Latest repositories" value="latest" />
                <Picker.Item label="Rated highest" value="ratedHighest" />
                <Picker.Item label="Rated lowest" value="ratedLowest" />
            </Picker>
        </>
    )
}

export default RepositoryListHeader;