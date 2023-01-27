import { View, Text, StyleSheet } from 'react-native';

const ResultItem = (props) => {
    const { item } = props;
    return (
        <View style={ResultItemStyle.container}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Name : </Text>
                <Text>{item.Name}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Branch Type : </Text>
                <Text>{item.BranchType}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>State : </Text>
                <Text>{item.State}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Pincode : </Text>
                <Text>{item.Pincode}</Text>
            </View>
        </View>
    )
}

export default ResultItem;

const ResultItemStyle = StyleSheet.create({
    container: {
      margin:2, 
      marginBottom: 5,
      backgroundColor: '#FFFFFF', 
      padding:8, 
      borderRadius:8
    }
})