import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { SingIn } from "../screens/SingIn";

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
        </Navigator>
    )
}