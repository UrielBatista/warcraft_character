import React, { useState } from "react";
import { View, Text, TouchableHighlight } from 'react-native';
import { Avatar } from "../avatar";

import { styles } from "./styles";

export function Profile() {
    const [aliance, setAliance] = useState(false);

    function handleClickAvatar(){
        if (aliance == false){
            setAliance(true);
        } else{
            setAliance(false)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.avatarTouchable} onPress={handleClickAvatar}>
                {aliance ? 
                    <Avatar urlImage="https://assets.worldofwarcraft.com/static/components/Logo/Logo-hordeEmblem.e6d11863f6c65b2a875091c1ac01cb3f.png" />
                    :
                    <Avatar urlImage="https://assets.worldofwarcraft.com/static/components/Logo/Logo-allianceEmblem.cd827b18a7766edbf05f09d66bc10e22.png" />
                }
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