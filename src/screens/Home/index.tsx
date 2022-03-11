import React, { useState } from "react";
import { View, Text } from 'react-native';

import { Background } from "../../components/background";
import { SearchProfile }   from '../../components/searchProfile'

import { Profile } from "../../components/profile";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";

type Params = {
    access_token: string;
}

export function Home() {
    const route = useRoute();
    const { access_token } = route.params as Params

    return (
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                </View>
                <Text style={styles.sumary}>
                    Busque as conquistas pvp do seu personagem de Word of Warcraft.
                </Text>

                {/* colocar um input que abranja 2 campos para enviar request API */}
                <SearchProfile name={access_token}/>
                </View>
        </Background>
    );
}