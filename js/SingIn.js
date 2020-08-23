import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

const SignIn = (props) => {
    return(
        <View style = {styles.container}>
            <Text> SignIn </Text>
            <Button title = 'TabBar' onPress = {()=> props.navigation.navigate('TabBar')}/>
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

export default SignIn;