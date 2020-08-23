import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import SignIn from './SingIn';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';

const BottomTab = createBottomTabNavigator();
const BottomBar = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='TabOne' component={TabOne} />
            <BottomTab.Screen name='TabTwo' component={TabTwo} />
            <BottomTab.Screen name='TabThree' component={TabThree} />
        </BottomTab.Navigator>
    )
}

const Stack = createStackNavigator();
 const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name ="TabBar" children = {BottomBar}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;



