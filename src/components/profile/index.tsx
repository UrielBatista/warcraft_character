import React, { useState } from "react";
import { View, Text, TouchableHighlight } from 'react-native';
import { Avatar } from "../avatar";

import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.avatarTouchable}>
                <Avatar urlImage="https://cdn.dribbble.com/users/763/screenshots/738337/wow-icon.png" />
            </TouchableHighlight>
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Olá,
                </Text>

                <Text style={styles.username}>
                    Seja bem vindo
                </Text>
            </View>
        </View>
    );
}