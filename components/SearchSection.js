import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const TEXT_HEAD = 'Please enter the city name and tap the search button.';

const SearchSection = (props) => {
    const { searchKey, setSearchKey, onPressResult, onPressClear, onError } = props;
    return (
        <View style={SearchSectionStyle.container}>
            <View>
                <Text>{TEXT_HEAD}</Text>
            </View>

            <View>
                <TextInput
                    style={SearchSectionStyle.searchTextStyle}
                    value={searchKey}
                    placeholder="Min 3 charaters"
                    onChangeText={(value) => setSearchKey(value)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ borderWidth: 1, borderColor: 'silver' }}>
                    <TouchableOpacity
                        style={SearchSectionStyle.clearButton}
                        onPress={() => onPressClear()}>
                        <Text>Clear</Text>
                    </TouchableOpacity>
                </View>

                <View style={SearchSectionStyle.searchContainer}>
                    <TouchableOpacity
                        style={[SearchSectionStyle.searchButton, { backgroundColor: '#1ed2ff' }]}
                        disabled={searchKey.trim().length > 2 ? false : true}
                        onPress={() => onPressResult()}
                    >
                        <Text>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                onError && (
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: 'red' }}>* An error occured while processing your request.</Text>
                    </View>
                )
            }
        </View>
    )
}

export default SearchSection;

const SearchSectionStyle = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 8
    },
    searchTextStyle: {
        padding: 5,
        borderColor: 'silver',
        borderWidth: 1,
        marginVertical: 10,
        paddingLeft: 8
    },
    searchButton: {
        paddingVertical: 5,
        paddingRight: 5,
        paddingLeft: 5,
    },
    clearButton: {
        paddingVertical: 5,
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: '#1ed2ff'
    },
    searchContainer: {
        marginLeft: 5,
        borderWidth: 1,
        borderColor: 'silver'
    }
})
