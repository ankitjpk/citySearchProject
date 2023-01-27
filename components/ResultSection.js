import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { ResultItem } from './../components';

const TEXT_DEFAULT = 'We found these result';
const TEXT_NO_RES = 'No result found. Please try someother keywords.';

const ResultSection = (props) => {
    const { searchResult, showProgressBar } = props;

    if (showProgressBar) {
        return (
            <View style={{ justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        <View style={ResultSectionStyle.container}>
            <Text style={ResultSectionStyle.headerText}>
                {searchResult && 
                searchResult.PostOffice &&
                searchResult.PostOffice.length > 0 ? searchResult.Message : searchResult && TEXT_NO_RES}
            </Text>

            {searchResult && 
            searchResult.PostOffice &&
            searchResult.PostOffice.length > 0 && (
                <View>
                    <FlatList
                        data={searchResult.PostOffice}
                        renderItem={({ item }) => <ResultItem item={item} />} />
                </View>
            )}
        </View>


    )
}

export default ResultSection;

const ResultSectionStyle = StyleSheet.create({
    container: {
        margin: 8
    },
    headerText: {
        fontSize: 14,
        color: 'grey',
        marginLeft:6,
        marginBottom: 3
    }
})