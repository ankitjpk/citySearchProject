import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = () => {
    return (
        <View style={headerStyle.container}>
            <View style={headerStyle.headerTextView}>
                <Text style={headerStyle.headerText}>City Search</Text>
            </View>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#009dc4',
        height: 40,
        borderColor: 'silver',
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        marginVertical: 8,
     
    },
    headerTextView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        flex:1
    },
    headerText: {
        fontSize: 20,
        color: '#FFFFFF'
    }
});

export default CustomHeader;