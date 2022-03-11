import React from "react";
import { View, Text } from 'react-native';
import { Avatar } from "../avatar";

import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://render.worldofwarcraft.com/us/character/gallywix/151/192695959-avatar.jpg" />
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Olá,
                </Text>

                <Text style={styles.username}>
                    Uriel
                </Text>
            </View>
        </View>
    );
}