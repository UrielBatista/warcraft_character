import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { SingIn } from "../screens/SingIn";
import { Home } from "../screens/Home";
import { CharacterDatails } from "../screens/CharacterDatails";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#170e09'
                }
            }}
        >
            <Screen
                name="SingIn"
                component={SingIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="CharacterDatails"
                component={CharacterDatails}
            />
        </Navigator>
    )
}