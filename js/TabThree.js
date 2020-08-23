import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const TabThree = (props) => {
    return(
        <View style = {styles.container}>
            <Text> TabThree </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    }
});

export default TabThree;