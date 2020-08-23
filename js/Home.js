import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

const Home = (props) => {
    return(
        <View style = {styles.container}>
            <Text> Home Pageg </Text>
            <Button title = 'Sign In' onPress = {()=> props.navigation.navigate('SignIn')}/>
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

export default Home;